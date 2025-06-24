import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CurrencyService, MonoData } from '../../services/currency.service';

import { AsyncPipe } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { catchError, finalize, Observable, of } from 'rxjs';

@Component({
  selector: 'app-currency',
  imports: [MatTableModule, AsyncPipe, MatProgressBarModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss',
})
export class CurrencyComponent implements OnInit {
  displayedColumns: string[] = ['name', 'rateBuy', 'rateSell'];

  currencyRates$!: Observable<MonoData[] | null>;
  isLoading = false;
  error: string | null = null;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.currencyRates$ = this.currencyService.getCurrencyRates().pipe(
      catchError((err) => {
        this.error = 'Не вдалось завантажити курс валют.';
        console.error(err);
        return of(null);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    );
  }

  getCurrencyName(currencyCode: number): string {
    return currencyCode === 840 ? 'USD' : 'EUR';
  }
}

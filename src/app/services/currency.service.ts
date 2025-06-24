import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';

export interface MonoData {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateSell: number;
  rateBuy: number;
  rateCross: number;
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://api.monobank.ua/bank/currency';

  constructor(private http: HttpClient) {}

  getCurrencyRates(): Observable<MonoData[]> {
    return this.http.get<MonoData[]>(this.apiUrl).pipe(
      retry(2),
      map((data) =>
        data
          .filter(
            (item) =>
              item.currencyCodeB === 980 &&
              [840, 978].includes(item.currencyCodeA)
          )
          .sort((a, b) => a.currencyCodeA - b.currencyCodeA)
      )
    );
  }
}

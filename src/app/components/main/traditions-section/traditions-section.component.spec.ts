import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionsSectionComponent } from './traditions-section.component';

describe('TraditionsSectionComponent', () => {
  let component: TraditionsSectionComponent;
  let fixture: ComponentFixture<TraditionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

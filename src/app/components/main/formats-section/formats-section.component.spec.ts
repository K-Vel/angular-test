import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatsSectionComponent } from './formats-section.component';

describe('FormatsSectionComponent', () => {
  let component: FormatsSectionComponent;
  let fixture: ComponentFixture<FormatsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

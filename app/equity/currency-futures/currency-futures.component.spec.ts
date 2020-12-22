import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFuturesComponent } from './currency-futures.component';

describe('CurrencyFuturesComponent', () => {
  let component: CurrencyFuturesComponent;
  let fixture: ComponentFixture<CurrencyFuturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyFuturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyFuturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityIntradayComponent } from './equity-intraday.component';

describe('EquityIntradayComponent', () => {
  let component: EquityIntradayComponent;
  let fixture: ComponentFixture<EquityIntradayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityIntradayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityIntradayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

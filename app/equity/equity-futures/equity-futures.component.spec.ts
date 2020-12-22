import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityFuturesComponent } from './equity-futures.component';

describe('EquityFuturesComponent', () => {
  let component: EquityFuturesComponent;
  let fixture: ComponentFixture<EquityFuturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityFuturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityFuturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

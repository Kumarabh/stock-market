import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityDeliveryComponent } from './equity-delivery.component';

describe('EquityDeliveryComponent', () => {
  let component: EquityDeliveryComponent;
  let fixture: ComponentFixture<EquityDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

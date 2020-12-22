import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityOptionsComponent } from './equity-options.component';

describe('EquityOptionsComponent', () => {
  let component: EquityOptionsComponent;
  let fixture: ComponentFixture<EquityOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

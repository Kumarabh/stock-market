import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZerodhaComponent } from './zerodha.component';

describe('ZerodhaComponent', () => {
  let component: ZerodhaComponent;
  let fixture: ComponentFixture<ZerodhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZerodhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerodhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

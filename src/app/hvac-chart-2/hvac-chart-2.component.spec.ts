import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacChart2Component } from './hvac-chart-2.component';

describe('HvacChart2Component', () => {
  let component: HvacChart2Component;
  let fixture: ComponentFixture<HvacChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HvacChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HvacChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

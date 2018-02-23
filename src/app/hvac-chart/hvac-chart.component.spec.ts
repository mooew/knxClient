import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacChartComponent } from './hvac-chart.component';

describe('HvacChartComponent', () => {
  let component: HvacChartComponent;
  let fixture: ComponentFixture<HvacChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HvacChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HvacChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

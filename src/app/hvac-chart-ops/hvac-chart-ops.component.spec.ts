import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacChartOpsComponent } from './hvac-chart-ops.component';

describe('HvacChartOpsComponent', () => {
  let component: HvacChartOpsComponent;
  let fixture: ComponentFixture<HvacChartOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HvacChartOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HvacChartOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

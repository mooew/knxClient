import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacInputComponent } from './hvac-input.component';

describe('HvacInputComponent', () => {
  let component: HvacInputComponent;
  let fixture: ComponentFixture<HvacInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HvacInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HvacInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

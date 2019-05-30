import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPatientPage } from './report-patient.page';

describe('ReportPatientPage', () => {
  let component: ReportPatientPage;
  let fixture: ComponentFixture<ReportPatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPatientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

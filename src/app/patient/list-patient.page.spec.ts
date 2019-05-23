import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientPage } from './list-patient.page';

describe('ListPatientPage', () => {
  let component: ListPatientPage;
  let fixture: ComponentFixture<ListPatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPatientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DialogflowService } from './dialogflow.service';

describe('DialogflowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogflowService = TestBed.get(DialogflowService);
    expect(service).toBeTruthy();
  });
});

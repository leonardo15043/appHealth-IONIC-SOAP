import { TestBed, async, inject } from '@angular/core/testing';

import { OutsideGuard } from './outside.guard';

describe('OutsideGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutsideGuard]
    });
  });

  it('should ...', inject([OutsideGuard], (guard: OutsideGuard) => {
    expect(guard).toBeTruthy();
  }));
});

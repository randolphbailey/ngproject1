import { TestBed } from '@angular/core/testing';

import { AllReimbursementsService } from './all-reimbursements.service';

describe('AllReimbursementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllReimbursementsService = TestBed.get(AllReimbursementsService);
    expect(service).toBeTruthy();
  });
});

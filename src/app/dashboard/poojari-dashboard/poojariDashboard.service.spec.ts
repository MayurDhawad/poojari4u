/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoojariDashboardService } from './poojariDashboard.service';

describe('Service: PoojariDashboard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoojariDashboardService]
    });
  });

  it('should ...', inject([PoojariDashboardService], (service: PoojariDashboardService) => {
    expect(service).toBeTruthy();
  }));
});

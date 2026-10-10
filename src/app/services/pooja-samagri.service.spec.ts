/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoojaSamagriService } from './pooja-samagri.service';

describe('Service: PoojaSamagri', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoojaSamagriService]
    });
  });

  it('should ...', inject([PoojaSamagriService], (service: PoojaSamagriService) => {
    expect(service).toBeTruthy();
  }));
});

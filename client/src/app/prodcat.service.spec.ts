import { TestBed, inject } from '@angular/core/testing';

import { ProdcatService } from './prodcat.service';

describe('ProdcatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdcatService]
    });
  });

  it('should be created', inject([ProdcatService], (service: ProdcatService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { ProductsArrayService } from './products-array.service';

describe('ProductsArrayService', () => {
  let service: ProductsArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { StoreEditStep1ResolverService } from './store-edit-step1-resolver.service';

describe('StoreEditStep1ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreEditStep1ResolverService]
    });
  });

  it('should be created', inject([StoreEditStep1ResolverService], (service: StoreEditStep1ResolverService) => {
    expect(service).toBeTruthy();
  }));
});

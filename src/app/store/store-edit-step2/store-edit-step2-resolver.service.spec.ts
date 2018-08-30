import { TestBed, inject } from '@angular/core/testing';

import { StoreEditStep2ResolverService } from './store-edit-step2-resolver.service';

describe('StoreEditStep2ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreEditStep2ResolverService]
    });
  });

  it('should be created', inject([StoreEditStep2ResolverService], (service: StoreEditStep2ResolverService) => {
    expect(service).toBeTruthy();
  }));
});

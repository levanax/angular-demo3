import { TestBed, inject } from '@angular/core/testing';

import { MissionInteractionService } from './mission-interaction.service';

describe('MissionInteractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissionInteractionService]
    });
  });

  it('should be created', inject([MissionInteractionService], (service: MissionInteractionService) => {
    expect(service).toBeTruthy();
  }));
});

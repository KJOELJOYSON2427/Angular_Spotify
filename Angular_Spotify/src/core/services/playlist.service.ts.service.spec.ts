import { TestBed } from '@angular/core/testing';

import { PlaylistServiceTsService } from './playlist.service.ts.service';

describe('PlaylistServiceTsService', () => {
  let service: PlaylistServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

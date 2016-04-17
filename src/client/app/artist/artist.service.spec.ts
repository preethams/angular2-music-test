import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ArtistService} from './artist.service';

describe('ArtistService', () => {

  beforeEachProviders(() => [ArtistService]);

  it('should get all artists', inject([ArtistService], (artistService:ArtistService) => {
    artistService.getAll().then(artists => expect(artists.length).toBe(13));
  }));

  it('should get one artist', inject([ArtistService], (artistService:ArtistService) => {
    artistService.get(1).then(artist => expect(artist.id).toBe(1));
  }));

});

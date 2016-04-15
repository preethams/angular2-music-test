import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ArtistListComponent} from './artist-list.component';
import {Artist, ArtistService} from './artist.service';

class MockArtistService {
  getAll() { return Promise.resolve([new Artist(1, 'one')]); }
}

describe('ArtistListComponent', () => {

  beforeEachProviders(() => [
    provide(ArtistService, {useClass: MockArtistService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(ArtistListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});

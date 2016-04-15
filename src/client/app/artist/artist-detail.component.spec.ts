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
import {ArtistDetailComponent} from './artist-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Artist, ArtistService} from './artist.service';

class MockArtistService {
  get() { return Promise.resolve(new Artist(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('ArtistDetailComponent', () => {

  beforeEachProviders(() => [
    provide(ArtistService, {useClass: MockArtistService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(ArtistDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});

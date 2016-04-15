import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {ArtistListComponent} from './artist-list.component';
import {SongsComponent} from './songs.component';
import {ArtistService} from './artist.service';

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [ArtistService],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: '/', name: 'ArtistList', component: ArtistListComponent, useAsDefault: true},
//   {path: '/:id', name: 'ArtistDetail', component: ArtistDetailComponent}
  {path: '/:id', name: 'Songs', component: SongsComponent}
])
export class ArtistRoot {
  constructor() {}
}

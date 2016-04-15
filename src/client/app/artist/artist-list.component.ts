import {Component, OnInit, Input} from 'angular2/core';
import {Artist, ArtistService} from './artist.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchPipe} from './search.pipe';

@Component({
  templateUrl: 'app/artist/artist-list.component.html',
  styleUrls: ['app/artist/artist-list.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [SearchPipe]
})

export class ArtistListComponent implements OnInit {
  artists: Artist[];
  
  constructor(private _service: ArtistService) {
  }
  
  ngOnInit() {
    this._service.getAll().then(artists => this.artists = artists);
  }
}

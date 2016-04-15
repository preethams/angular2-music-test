import {Component, OnInit} from 'angular2/core';
import {Artist, ArtistService} from './artist.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/artist/artist-detail.component.html',
  styleUrls: ['app/artist/artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit, CanDeactivate {

  artist: Artist;
  editName: string;

  constructor(private _service: ArtistService, private _router: Router, private _routeParams: RouteParams) { 
  }

  ngOnInit() {
    let id = Number(this._routeParams.get('id'));
    this._service.get(id).then(artist => {
      if (artist) {
        this.editName = artist.name;
        this.artist = artist;
      } else {
        this.gotoList();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.artist || this.artist.name === this.editName) {
      return true;
    }

    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.editName = this.artist.name;
    this.gotoList();
  }

  save() {
    this.artist.name = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['ArtistList']);
  }
}

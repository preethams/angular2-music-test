import {Injectable} from 'angular2/core';
import {ArtistsLists} from './artists-mock';

export class Artist {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class ArtistService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = ArtistsLists;

let promise = Promise.resolve(mock);

import {Component, OnInit, ElementRef, Renderer} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {AudioPlayer} from './html5-player.component';
import {ArtistService} from './artist.service';
import {SongsList} from './songs-mock';
import {songsRoot} from './constants';

@Component({
    selector: 'my-songs',
    template: `
        <ul *ngFor="#song of songs">
            <a (click)="playSong(song)">{{song}}</a>
        </ul>
        <audio-player></audio-player>
    `,
    directives: [AudioPlayer]
})

export class SongsComponent implements OnInit {
    songs;
    artistName;
    
    constructor(
        private _router: Router, 
        private _routeParams: RouteParams, 
        private _artistService: ArtistService) {
    }           
    
    ngOnInit() {
        let id = Number(this._routeParams.get('id'));
        this.songs = SongsList.filter(songslist => songslist.id === id)[0].songs;
        this._artistService.get(id).then(artist => {
            this.artistName = artist.name;
            
            // call playSong to autoplay when loaded
            this.playSong(this.songs[0]);
        });
    }
    
    playSong(song) {
        let adjustedSongName = song.replace(/\s+/g, '-');
        let audioSource = `${songsRoot}${this.artistName}/${adjustedSongName}.mp3`;
        let player = <HTMLAudioElement> document.getElementById('audio');
        player.src = audioSource;
        player.load();
        player.play();
    }
}
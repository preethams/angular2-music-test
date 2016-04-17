System.register(['angular2/core', 'angular2/router', './html5-player.component', './artist.service', './songs-mock', './constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, html5_player_component_1, artist_service_1, songs_mock_1, constants_1;
    var SongsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (html5_player_component_1_1) {
                html5_player_component_1 = html5_player_component_1_1;
            },
            function (artist_service_1_1) {
                artist_service_1 = artist_service_1_1;
            },
            function (songs_mock_1_1) {
                songs_mock_1 = songs_mock_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            SongsComponent = (function () {
                function SongsComponent(_router, _routeParams, _artistService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._artistService = _artistService;
                }
                SongsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = Number(this._routeParams.get('id'));
                    this.songs = songs_mock_1.SongsList.filter(function (songslist) { return songslist.id === id; })[0].songs;
                    this._artistService.get(id).then(function (artist) {
                        _this.artistName = artist.name;
                        // call playSong to autoplay when loaded
                        _this.playSong(null, _this.songs[0]);
                    });
                };
                SongsComponent.prototype.playSong = function (event, song) {
                    if (event)
                        event.preventDefault();
                    var adjustedSongName = song.replace(/\s+/g, '-');
                    var audioSource = "" + constants_1.songsRoot + this.artistName + "/" + adjustedSongName + ".mp3";
                    var player = document.getElementById('audio');
                    player.src = audioSource;
                    player.load();
                    player.play();
                };
                SongsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-songs',
                        template: "\n        <ul class=\"list-group\">\n            <li *ngFor=\"#song of songs\" class=\"list-group-item\">\n                <a href=\"#\" (click)=\"playSong($event, song)\">\n                    <i class=\"glyphicon glyphicon-music\"></i>                \n                    {{song}}\n                </a>\n            </li>\n        </ul>        \n        <audio-player></audio-player>\n    ",
                        styles: ["\n        .glyphicon-music {\n            color: black;\n        }\n    "],
                        directives: [html5_player_component_1.AudioPlayer]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, artist_service_1.ArtistService])
                ], SongsComponent);
                return SongsComponent;
            }());
            exports_1("SongsComponent", SongsComponent);
        }
    }
});
//# sourceMappingURL=songs.component.js.map
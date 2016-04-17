System.register(['angular2/core', './artist.service', 'angular2/router', './search.pipe', './constants'], function(exports_1, context_1) {
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
    var core_1, artist_service_1, router_1, search_pipe_1, constants_1;
    var ArtistListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_service_1_1) {
                artist_service_1 = artist_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            ArtistListComponent = (function () {
                function ArtistListComponent(_service) {
                    this._service = _service;
                }
                ArtistListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.imageRoot = "" + constants_1.imageRoot;
                    this._service.getAll().then(function (artists) { return _this.artists = artists; });
                };
                ArtistListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/artist/artist-list.component.html',
                        styleUrls: ['app/artist/artist-list.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [search_pipe_1.SearchPipe]
                    }), 
                    __metadata('design:paramtypes', [artist_service_1.ArtistService])
                ], ArtistListComponent);
                return ArtistListComponent;
            }());
            exports_1("ArtistListComponent", ArtistListComponent);
        }
    }
});
//# sourceMappingURL=artist-list.component.js.map
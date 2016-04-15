System.register(['angular2/core', './artists-mock'], function(exports_1, context_1) {
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
    var core_1, artists_mock_1;
    var Artist, ArtistService, mock, promise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artists_mock_1_1) {
                artists_mock_1 = artists_mock_1_1;
            }],
        execute: function() {
            Artist = (function () {
                function Artist(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Artist;
            }());
            exports_1("Artist", Artist);
            ArtistService = (function () {
                function ArtistService() {
                }
                ArtistService.prototype.getAll = function () { return promise; };
                ArtistService.prototype.get = function (id) {
                    return promise.then(function (all) { return all.find(function (e) { return e.id === id; }); });
                };
                ArtistService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ArtistService);
                return ArtistService;
            }());
            exports_1("ArtistService", ArtistService);
            mock = artists_mock_1.ArtistsLists;
            promise = Promise.resolve(mock);
        }
    }
});
//# sourceMappingURL=artist.service.js.map
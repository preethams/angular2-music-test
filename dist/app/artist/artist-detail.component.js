System.register(['angular2/core', './artist.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, artist_service_1, router_1;
    var ArtistDetailComponent;
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
            }],
        execute: function() {
            ArtistDetailComponent = (function () {
                function ArtistDetailComponent(_service, _router, _routeParams) {
                    this._service = _service;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                ArtistDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = Number(this._routeParams.get('id'));
                    this._service.get(id).then(function (artist) {
                        if (artist) {
                            _this.editName = artist.name;
                            _this.artist = artist;
                        }
                        else {
                            _this.gotoList();
                        }
                    });
                };
                ArtistDetailComponent.prototype.routerCanDeactivate = function (next, prev) {
                    if (!this.artist || this.artist.name === this.editName) {
                        return true;
                    }
                    return new Promise(function (resolve, reject) { return resolve(window.confirm('Discard changes?')); });
                };
                ArtistDetailComponent.prototype.cancel = function () {
                    this.editName = this.artist.name;
                    this.gotoList();
                };
                ArtistDetailComponent.prototype.save = function () {
                    this.artist.name = this.editName;
                    this.gotoList();
                };
                ArtistDetailComponent.prototype.gotoList = function () {
                    this._router.navigate(['ArtistList']);
                };
                ArtistDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/artist/artist-detail.component.html',
                        styleUrls: ['app/artist/artist-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [artist_service_1.ArtistService, router_1.Router, router_1.RouteParams])
                ], ArtistDetailComponent);
                return ArtistDetailComponent;
            }());
            exports_1("ArtistDetailComponent", ArtistDetailComponent);
        }
    }
});
//# sourceMappingURL=artist-detail.component.js.map
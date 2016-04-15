System.register(['angular2/testing', 'angular2/core', './artist-detail.component', 'angular2/router', './artist.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, core_1, artist_detail_component_1, router_1, artist_service_1;
    var MockArtistService, MockRouter, MockRouteParams;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_detail_component_1_1) {
                artist_detail_component_1 = artist_detail_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (artist_service_1_1) {
                artist_service_1 = artist_service_1_1;
            }],
        execute: function() {
            MockArtistService = (function () {
                function MockArtistService() {
                }
                MockArtistService.prototype.get = function () { return Promise.resolve(new artist_service_1.Artist(1, 'one')); };
                return MockArtistService;
            }());
            MockRouter = (function () {
                function MockRouter() {
                }
                MockRouter.prototype.navigate = function () { };
                return MockRouter;
            }());
            MockRouteParams = (function () {
                function MockRouteParams() {
                }
                MockRouteParams.prototype.get = function () { return 1; };
                return MockRouteParams;
            }());
            testing_1.describe('ArtistDetailComponent', function () {
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(artist_service_1.ArtistService, { useClass: MockArtistService }),
                    core_1.provide(router_1.Router, { useClass: MockRouter }),
                    core_1.provide(router_1.RouteParams, { useClass: MockRouteParams }),
                ]; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(artist_detail_component_1.ArtistDetailComponent).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=artist-detail.component.spec.js.map
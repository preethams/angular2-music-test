System.register(['angular2/testing', 'angular2/core', './artist-list.component', './artist.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, core_1, artist_list_component_1, artist_service_1;
    var MockArtistService;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_list_component_1_1) {
                artist_list_component_1 = artist_list_component_1_1;
            },
            function (artist_service_1_1) {
                artist_service_1 = artist_service_1_1;
            }],
        execute: function() {
            MockArtistService = (function () {
                function MockArtistService() {
                }
                MockArtistService.prototype.getAll = function () { return Promise.resolve([new artist_service_1.Artist(1, 'one')]); };
                return MockArtistService;
            }());
            testing_1.describe('ArtistListComponent', function () {
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(artist_service_1.ArtistService, { useClass: MockArtistService }),
                ]; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(artist_list_component_1.ArtistListComponent).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=artist-list.component.spec.js.map
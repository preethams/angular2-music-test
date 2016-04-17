System.register(['angular2/testing', './artist.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, artist_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (artist_service_1_1) {
                artist_service_1 = artist_service_1_1;
            }],
        execute: function() {
            testing_1.describe('ArtistService', function () {
                testing_1.beforeEachProviders(function () { return [artist_service_1.ArtistService]; });
                testing_1.it('should get all artists', testing_1.inject([artist_service_1.ArtistService], function (artistService) {
                    artistService.getAll().then(function (artists) { return testing_1.expect(artists.length).toBe(3); });
                }));
                testing_1.it('should get one artist', testing_1.inject([artist_service_1.ArtistService], function (artistService) {
                    artistService.get(1).then(function (artist) { return testing_1.expect(artist.id).toBe(1); });
                }));
            });
        }
    }
});
//# sourceMappingURL=artist.service.spec.js.map
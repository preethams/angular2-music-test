System.register(['angular2/testing', '../app/angular2-music'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, angular2_music_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (angular2_music_1_1) {
                angular2_music_1 = angular2_music_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [angular2_music_1.Angular2MusicApp]; });
            testing_1.describe('App: Angular2Music', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([angular2_music_1.Angular2MusicApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([angular2_music_1.Angular2MusicApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=angular2-music.spec.js.map
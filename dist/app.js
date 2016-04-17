System.register(['angular2/platform/browser', './app/angular2-music'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, angular2_music_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (angular2_music_1_1) {
                angular2_music_1 = angular2_music_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(angular2_music_1.Angular2MusicApp, []);
        }
    }
});
//# sourceMappingURL=app.js.map
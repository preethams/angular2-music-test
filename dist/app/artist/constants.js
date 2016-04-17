System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var songsRoot, imageRoot;
    return {
        setters:[],
        execute: function() {
            exports_1("songsRoot", songsRoot = 'http://songs-assets.s3.amazonaws.com/songs/');
            exports_1("imageRoot", imageRoot = '/images/');
        }
    }
});
//# sourceMappingURL=constants.js.map
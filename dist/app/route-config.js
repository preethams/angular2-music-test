System.register(['./artist/artist-root.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var artist_root_component_1;
    var CliRouteConfig;
    return {
        setters:[
            function (artist_root_component_1_1) {
                artist_root_component_1 = artist_root_component_1_1;
            }],
        execute: function() {
            exports_1("CliRouteConfig", CliRouteConfig = [
                { path: '/artist/...', name: 'ArtistRoot', component: artist_root_component_1.ArtistRoot, useAsDefault: true },
            ]);
        }
    }
});
//# sourceMappingURL=route-config.js.map
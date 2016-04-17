System.register(['angular2/core', 'angular2/router', './route-config', './header.component'], function(exports_1, context_1) {
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
    var core_1, router_1, route_config_1, header_component_1;
    var Angular2MusicApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            Angular2MusicApp = (function () {
                function Angular2MusicApp() {
                    this.defaultMeaning = 42;
                }
                Angular2MusicApp.prototype.meaningOfLife = function (meaning) {
                    return "The meaning of life is " + (meaning || this.defaultMeaning);
                };
                Angular2MusicApp = __decorate([
                    core_1.Component({
                        selector: 'angular2-music-app',
                        providers: [router_1.ROUTER_PROVIDERS],
                        templateUrl: 'app/angular2-music.html',
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent],
                        pipes: []
                    }),
                    router_1.RouteConfig([].concat(route_config_1.CliRouteConfig)), 
                    __metadata('design:paramtypes', [])
                ], Angular2MusicApp);
                return Angular2MusicApp;
            }());
            exports_1("Angular2MusicApp", Angular2MusicApp);
        }
    }
});
//# sourceMappingURL=angular2-music.js.map
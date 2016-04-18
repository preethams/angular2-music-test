import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {HeaderComponent} from './header.component';

@Component({
  selector: 'angular2-music-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/angular2-music.html',
  directives: [ROUTER_DIRECTIVES, HeaderComponent],
  pipes: []
})

@RouteConfig([
].concat(CliRouteConfig))

export class Angular2MusicApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}

export class Angular2MusicPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-music-app p')).getText();
  }
}

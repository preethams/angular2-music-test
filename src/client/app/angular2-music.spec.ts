import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2MusicApp} from '../app/angular2-music';

beforeEachProviders(() => [Angular2MusicApp]);

describe('App: Angular2Music', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2MusicApp], (app: Angular2MusicApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2MusicApp], (app: Angular2MusicApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});


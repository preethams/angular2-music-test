import {Component, Input} from 'angular2/core';

@Component({
    selector: 'audio-player',
    template: `
        <audio controls id='audio'>
            <source src="" type="audio/mpeg">
        </audio>
    `,
    styles: [`
        audio {
            width: 100%;
        }
        /*
          max-width in shadow dom, override it in chrome and safari browsers
        */ 
        audio::-webkit-media-controls-enclosure {
            max-width: 100%;
        }
    `],   
})

export class AudioPlayer {
}
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
    `],   
})

export class AudioPlayer {
}
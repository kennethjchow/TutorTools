import {Howl, Howler} from 'howler'
import Bark from '../swag_bark.mp3'

class Sound {
    constructor(displayName, mp3_filename){
        this.displayName = displayName;
        this.mp3_filename = mp3_filename
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(displayName) {
        this._displayName = displayName;
    }
    playSound() {
        Howler.volume(0.5)
        console.log({Bark})
        const src = {
            src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
            format: ['mp3'],
            autoplay: true,
            loop: false,
            volume: 0.5,
        }
        const sound = new Howl(src)
        sound.play();
    }
}

export default Sound;
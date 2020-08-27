import Sound from '../class/sound'
import ShortI from '../sounds/short_i.mp3'

class SoundList {
    constructor(){
        this.sounds = [];
        this.sounds.push(new Sound('A', ShortI));
        this.sounds.push(new Sound('E', ShortI));
        this.sounds.push(new Sound('I', ShortI));
        this.sounds.push(new Sound('O', ShortI));
        this.sounds.push(new Sound('U', ShortI));
        this.sounds.push(new Sound('A', ShortI));
        this.sounds.push(new Sound('E', ShortI));
        this.sounds.push(new Sound('I', ShortI));
        this.sounds.push(new Sound('O', ShortI));
        this.sounds.push(new Sound('U', ShortI));
    }

    get sounds() {
        return this._sounds;
    }
    set sounds(sounds) {
        this._sounds = sounds;
    }
}

export default SoundList
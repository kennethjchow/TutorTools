import Sound from '../class/sound'
import ShortI from '../sounds/short_i.mp3'

class SoundList {
    constructor(){
        this.sounds = [];
        this.sounds.push(new Sound('Short A', ShortI));
        this.sounds.push(new Sound('Long A', ShortI));
        this.sounds.push(new Sound('Short E', ShortI));
        this.sounds.push(new Sound('Long E', ShortI));
        this.sounds.push(new Sound('Short I', ShortI));
        this.sounds.push(new Sound('Long I', ShortI));
        this.sounds.push(new Sound('Short O', ShortI));
        this.sounds.push(new Sound('Long O', ShortI));
        this.sounds.push(new Sound('Short U', ShortI));
        this.sounds.push(new Sound('Long U', ShortI));
    }

    get sounds() {
        return this._sounds;
    }
    set sounds(sounds) {
        this._sounds = sounds;
    }
}

export default SoundList
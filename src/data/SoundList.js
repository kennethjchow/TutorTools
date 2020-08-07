import Sound from '../class/sound'
import ShortI from '../sounds/short_i.mp3'

class SoundList {
    constructor(){
        this.sounds = [];
        this.sounds.push(new Sound('Short I', ShortI))
        this.sounds.push(new Sound('Long I', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'))
        this.sounds.push(new Sound('Short A', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')) 
    }
    get sounds() {
        return this._sounds;
    }
    set sounds(sounds) {
        this._sounds = sounds;
    }
}

export default SoundList
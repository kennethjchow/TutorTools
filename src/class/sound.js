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
}

export default Sound;
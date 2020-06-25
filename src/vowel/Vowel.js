import React from 'react';
import {Howl, Howler} from 'howler'
import Bark from '../swag_bark.mp3'

class Vowel extends React.Component {
  SoundPlay = (src)=> {
    const sound = new Howl({src})
    sound.play();
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.play = false
  }
  handleClick(e) {   
    this.SoundPlay(Bark) 
    console.log('The link was clicked.');
  }
  render() {
    Howler.volume(0.5)
    return (
      <div>
        <h2 onClick={this.handleClick}>Short</h2>
      </div>
    );
  }
}

export default Vowel;
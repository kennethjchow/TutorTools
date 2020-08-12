import React from 'react';
import {Howl, Howler} from 'howler'
import './Vowel.css'

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
    this.props.sound.playSound()
    console.log('The link was clicked.');
  }
  render() {
    Howler.volume(0.5)
    return (
      <div>
        <h2 className="vowel-text" onClick={this.handleClick}>{this.props.sound.displayName}</h2>
      </div>
    );
  }
}

export default Vowel;
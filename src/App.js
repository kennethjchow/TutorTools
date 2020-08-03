import React from 'react';
import ReactDOM from 'react-dom';
import Vowel from './vowel/Vowel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sound from './class/sound'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  render() {
    let sounds = [];
    sounds.push(new Sound('Short I', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'))
    sounds.push(new Sound('Long I', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'))
    sounds.push(new Sound('Short A', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'))
    return (
      <Container>
        {createRows(sounds)}
      </Container>
    );
  }
}

function createRows(sounds) {
  const row_length=3
  const totalNumSounds = sounds.length;
  let index = 0;
  let elements = []

  while (index < totalNumSounds) {
    if (totalNumSounds-row_length < row_length) {
      elements.push(
        <Row>
          <Col><Vowel sound={sounds[index]}/></Col>
          <Col><Vowel sound={sounds[index+1]}/></Col>
          <Col><Vowel sound={sounds[index+2]}/></Col>
        </Row>
      )
    }
    index+=row_length
  }
  return elements
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
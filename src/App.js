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
    return (
      <Container>
        {createRows(sounds)}
        <Row>
          <Col><Vowel/></Col>
          <Col><Vowel/></Col>
          <Col><Vowel/></Col>
        </Row>

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
          <Col><Vowel sound={sounds[index+1]}/></Col>
          <Col><Vowel sound={sounds[index+2]}/></Col>
          <Col><Vowel sound={sounds[index+3]}/></Col>
        </Row>
      )
    }
    index+=row_length
  }
}



let sounds = [
  new Sound('Long A', '../swag_bark.mp3'),
  new Sound('Short A', '../swag_bark.mp3'),
  new Sound('Long I', '../swag_bark.mp3'),
  new Sound('Short I', '../swag_bark.mp3')
]

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
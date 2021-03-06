import React from 'react';
import Vowel from '../VowelSound/VowelSound';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SoundList from '../../../data/SoundList'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './VowelPracticePage.css';


class VowelPracticePage extends React.Component {
  render() {
    let sounds = new SoundList()
    return (
        <div className="app-container">
            <Container>
                {createRows(sounds.sounds)}
            </Container>
        </div>
    );
  }
}

function createRows(sounds) {
  const row_length=2
  const totalNumSounds = sounds.length;
  let index = 0;
  let elements = []

  while (index < totalNumSounds) {
    if (totalNumSounds-row_length > row_length) {
      console.log('hi')
      elements.push(
        <Row>
          <Col><Vowel sound={sounds[index]}/></Col>
          <Col><Vowel sound={sounds[index+1]}/></Col>
        </Row>
      )
    }
    index+=row_length
  }
  return elements
}

export default VowelPracticePage;
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
            <div className="section-header">
              <h4>english | vowel practice</h4>
            </div>
            <Container>
              <Row>
                <Col className="vowelColumnHeader"><h2>Short</h2></Col>
                <Col className="vowelColumnHeader"><h2>Long</h2></Col>
              </Row>
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
        <Row className="soundRow">
          <Col className="soundCol"><Vowel sound={sounds[index]}/></Col>
          <Col className="soundCol"><Vowel sound={sounds[index+1]}/></Col>
        </Row>
      )
    }
    index+=row_length
  }
  return elements
}

export default VowelPracticePage;
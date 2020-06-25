import React from 'react';
import ReactDOM from 'react-dom';
import Vowel from './vowel/Vowel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';


class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><Vowel/></Col>
          <Col><Vowel/></Col>
          <Col><Vowel/></Col>
        </Row>
        <Row>
          <Col><Vowel/></Col>
          <Col><Vowel/></Col>
          <Col><Vowel/></Col>
        </Row>

      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
import React from 'react';
import {Form, Button, Nav} from '../../../../node_modules/react-bootstrap'
import shortid from '../../../../node_modules/shortid';
import { Checkmark } from 'react-checkmark'
import FadeIn from 'react-fade-in';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './GcfPage.css';
import GCFLogic from '../../../data/GCFLogic';


class GcfPage extends React.Component {
  constructor(props) {
    super(props);
    const gcfNums = GCFLogic.generateGcfNumbers(5, 20);
    const correctAnswer = GCFLogic.getGCFTwoNumbers(gcfNums[0], gcfNums[1]);
    console.log(gcfNums);
    console.log(correctAnswer);
    this.state = {
      userAnswer: null, 
      gcfNum1: gcfNums[0], 
      gcfNum2: gcfNums[1], 
      key: shortid.generate(), 
      isCorrect: answerStatus['BLANK'],
      correctAnswer: correctAnswer
    };

    // This binding is necessary to make `this` work in the callback
    this.submitGcfAnswer = this.submitGcfAnswer.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.skipQuestion = this.skipQuestion.bind(this);
  }
  skipQuestion = () => {
    this.resetView()
  }
  submitGcfAnswer = (event) => {
    const isCorrect = this.state.correctAnswer === parseInt(this.state.userAnswer);
    if (isCorrect) {
      this.setState({isCorrect: answerStatus['CORRECT']});
      const delayInMilliseconds = 1500; //1 second
      console.log(this)
      setTimeout(function() { //Start the timer
        this.resetView()
      }.bind(this), delayInMilliseconds)
    } else {
      this.setState({isCorrect: answerStatus['INCORRECT']});
    }
    

  }
  handleAnswerChange = (event) => {
    this.setState({userAnswer: event.target.value});
  }

  resetView = () => {
    const gcfNums = GCFLogic.generateGcfNumbers(5, 20);
    const correctAnswer = GCFLogic.getGCFTwoNumbers(gcfNums[0], gcfNums[1]);
    this.setState({
      userAnswer: null, 
      gcfNum1: gcfNums[0], 
      gcfNum2: gcfNums[1], 
      key: shortid.generate(), 
      isCorrect: answerStatus['BLANK'],
      correctAnswer: correctAnswer
    });
  }
  
  render() {
    return (
      <div className="gcf-container" key={this.state.key}>
        <div className="section-header">
          <h4>math | Greatest Common Factor</h4>
        </div>
        <FadeIn className="gcf-question-container ">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  What is the GCF of {this.state.gcfNum1} and {this.state.gcfNum2}
                </Form.Label>
                <Form.Control autoComplete="off" placeholder="Enter your answer here" onChange={this.handleAnswerChange} />
                
              </Form.Group>
              <div className="actionContainer">
                <Button variant="primary" onClick={(e) => this.submitGcfAnswer(e)}>
                  Submit
                </Button>
                <Nav.Link onClick={(e) => this.skipQuestion(e)}>Skip</Nav.Link>
                <div className="answerStatus">
                { this.state.isCorrect === answerStatus['CORRECT'] ? <Checkmark size='medium' />: null}
                { this.state.isCorrect === answerStatus['INCORRECT']?<FadeIn><div>Try again</div></FadeIn>: null}
                </div>
              </div>
            </Form>
        </FadeIn>
      </div>
    );
  }
}

const answerStatus = {
  BLANK: 'blank',
  CORRECT: 'correct',
  INCORRECT: 'incorrect'
}


export default GcfPage;
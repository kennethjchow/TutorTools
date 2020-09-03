import React from 'react';
import {Form, Button, Nav} from '../../../node_modules/react-bootstrap'
import shortid from '../../../node_modules/shortid';
import { Checkmark } from 'react-checkmark'
import FadeIn from 'react-fade-in';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './simpleTextQuestion.css';


class SimpleTextQuestion extends React.Component {
  constructor(props) {
    super(props);
    const questionData = props.getQuestionData();
    this.state = {
      userAnswer: null, 
      text: questionData.questionText,
      key: shortid.generate(), 
      isCorrect: answerStatus['BLANK'],
      correctAnswer: questionData.correctAnswer
    };

    // This binding is necessary to make `this` work in the callback
    this.submitAnswer = this.submitAnswer.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.skipQuestion = this.skipQuestion.bind(this);
  }
  skipQuestion = () => {
    this.resetView()
  }
  submitAnswer = (event) => {
    const isCorrect = this.state.correctAnswer === parseInt(this.state.userAnswer);
    if (isCorrect) {
      this.setState({isCorrect: answerStatus['CORRECT']});
      const delayInMilliseconds = 1500; //1 second
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
    const questionData = this.props.getQuestionData();
    this.setState({
      userAnswer: null, 
      text: questionData.questionText,
      key: shortid.generate(), 
      isCorrect: answerStatus['BLANK'],
      correctAnswer: questionData.correctAnswer
    });
  }
  
  render() {
    return (
        <div key={this.state.key}>
            <FadeIn className="fadein-question-container">
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                    {this.state.text}
                    </Form.Label>
                    <Form.Control autoComplete="off" placeholder="Enter your answer here" onChange={this.handleAnswerChange} />
                    
                </Form.Group>
                <div className="actionContainer">
                    <Button variant="primary" onClick={(e) => this.submitAnswer(e)}>
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


export default SimpleTextQuestion;
import React from "react";
import { Form, Button, Nav } from "../../../node_modules/react-bootstrap";
import shortid from "../../../node_modules/shortid";
import { Checkmark } from "react-checkmark";
import FadeIn from "react-fade-in";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./simpleTextQuestion.css";

class SimpleTextQuestion extends React.Component {
  componentDidMount(){
    this.nameInput.focus(); 
  }
  constructor(props) {
    super(props);
    const questionData = props.getQuestionData();
    this.state = {
      userAnswer: null,
      text: questionData.questionText,
      key: shortid.generate(),
      isCorrect: answerStatus["BLANK"],
      correctAnswer: questionData.correctAnswer,
    };

    // This binding is necessary to make `this` work in the callback
    this.submitAnswer = this.submitAnswer.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.skipQuestion = this.skipQuestion.bind(this);
  }
  skipQuestion = () => {
    this.resetView();
  };
  submitAnswer = (event) => {
    event.preventDefault();
    const isCorrect =
      this.state.correctAnswer === parseInt(this.state.userAnswer);
    if (isCorrect) {
      this.setState({ isCorrect: answerStatus["CORRECT"] });
      const delayInMilliseconds = 1500; //1 second
      setTimeout(
        function () {
          //Start the timer
          this.resetView();
        }.bind(this),
        delayInMilliseconds
      );
    } else {
      this.setState({ isCorrect: answerStatus["INCORRECT"] });
    }
  };
  handleAnswerChange = (event) => {
    this.setState({ userAnswer: event.target.value });
  };

  resetView = () => {
    const questionData = this.props.getQuestionData();
    this.setState({
      userAnswer: null,
      text: questionData.questionText,
      key: shortid.generate(),
      isCorrect: answerStatus["BLANK"],
      correctAnswer: questionData.correctAnswer,
    });
    this.nameInput.focus();
  };

  render() {
    return (
      <div key={this.state.key}>
        <FadeIn className="fadein-question-container">
          <Form onSubmit={(event) => this.submitAnswer(event)}>
            <Form.Group >
              <Form.Label>{this.state.text}</Form.Label>
              <Form.Control ref={(input) => { this.nameInput = input; }}
                autoComplete="off"
                placeholder="Enter your answer here"
                onChange={this.handleAnswerChange}
              />
            </Form.Group>
            <div className="actionContainer">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Nav.Link onClick={(e) => this.skipQuestion(e)}>Skip</Nav.Link>
              <div className="answerStatus">
                {this.state.isCorrect === answerStatus["CORRECT"] ? (
                  <Checkmark size="medium" />
                ) : null}
                {this.state.isCorrect === answerStatus["INCORRECT"] ? (
                  <FadeIn>
                    <div className="redText">Try again</div>
                  </FadeIn>
                ) : null}
              </div>
            </div>
          </Form>
        </FadeIn>
      </div>
    );
  }
}

const answerStatus = {
  BLANK: "blank",
  CORRECT: "correct",
  INCORRECT: "incorrect",
};

export default SimpleTextQuestion;

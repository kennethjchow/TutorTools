import React from 'react';
import {Form, Button} from '../../../../node_modules/react-bootstrap'
import { Tick } from 'react-crude-animated-tick';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './GcfPage.css';
import GCFLogic from '../../../data/GCFLogic';


class GcfPage extends React.Component {
  constructor(props) {
    super(props);
    const gcfNums = GCFLogic.generateGcfNumbers(5, 20);
    this.state = {answer: null, gcfNum1: gcfNums[0], gcfNum2: gcfNums[1], isCorrect: null};

    // This binding is necessary to make `this` work in the callback
    this.submitGcfAnswer = this.submitGcfAnswer.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }
  submitGcfAnswer = (event) => {
    const isCorrect = GCFLogic.getGCFTwoNumbers(this.state.gcfNum1, this.state.gcfNum2) === parseInt(this.state.answer);
    console.log(GCFLogic.getGCFTwoNumbers(this.state.gcfNum1, this.state.gcfNum2));
    console.log(this.state.answer);
    if (isCorrect) {
      this.setState({isCorrect: 'Right!'});
    } else {
      this.setState({isCorrect: 'Wrong'});
    }
  }
  handleAnswerChange = (event) => {
    this.setState({answer: event.target.value});
  }
  render() {
    return (
      <div className="gcf-container">
        <div className="section-header">
          <h4>math | Greatest Common Factor</h4>
        </div>
        <div className="gcf-question-container ">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                What is the GCF of {this.state.gcfNum1} and {this.state.gcfNum2}
                <div>
                  <Tick size={36} />
                </div>
              </Form.Label>
              <Form.Control autoComplete="off" placeholder="Enter your answer here" onChange={this.handleAnswerChange} />
            </Form.Group>
            <Button variant="primary" onClick={(e) => this.submitGcfAnswer(e)}>
              Submit
            </Button>
          </Form>
          
        </div>
      </div>
    );
  }
}



export default GcfPage;
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SimpleTextQuestion from '../simpleTextQuestion/simpleTextQuestion'
import GCFLogic from '../../data/GCFLogic';


class LcmPage extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.getQuestionData = this.getQuestionData.bind(this);
  }

  getQuestionData = () => {
    const lcmNums = GCFLogic.generateLCMQuestionNums(2, 9);
    const correctAnswer = GCFLogic.lcmTwoNumbers(lcmNums[0], lcmNums[1]); 
    console.log(correctAnswer);

    const result = {
      'questionText': `What is the Least Common Multiple of ${lcmNums[0]} and ${lcmNums[1]}`,
      'correctAnswer': correctAnswer
    }
    return result
  }
  
  render() {
    return (
      <div className="gcf-container">
        <div className="section-header">
          <h4>math | Least Common Multiple</h4>
        </div>
        <SimpleTextQuestion getQuestionData={this.getQuestionData}></SimpleTextQuestion>
      </div>
    );
  }
}

const answerStatus = {
  BLANK: 'blank',
  CORRECT: 'correct',
  INCORRECT: 'incorrect'
}


export default LcmPage;
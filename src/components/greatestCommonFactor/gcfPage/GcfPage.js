import React from 'react';
import shortid from '../../../../node_modules/shortid';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SimpleTextQuestion from '../../simpleTextQuestion/simpleTextQuestion'
import './GcfPage.css';
import GCFLogic from '../../../data/GCFLogic';


class GcfPage extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.getQuestionData = this.getQuestionData.bind(this);
  }

  getQuestionData = () => {
    const gcfNums = GCFLogic.generateGcfNumbers(5, 20);
    const correctAnswer = GCFLogic.getGCFTwoNumbers(gcfNums[0], gcfNums[1]); 

    const result = {
      'questionText': `What is the Greatest Common Factor of ${gcfNums[0]} and ${gcfNums[1]}`,
      'correctAnswer': correctAnswer
    }
    return result
  }
  
  render() {
    return (
      <div className="gcf-container">
        <div className="section-header">
          <h4>math | Greatest Common Factor</h4>
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


export default GcfPage;
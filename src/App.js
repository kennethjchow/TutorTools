import React from 'react';
import ReactDOM from 'react-dom';
import Vowel from './vowel/Vowel';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Vowel/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

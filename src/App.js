import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavbar from './components/mainNavbar/MainNavbar'
import VowelPracticePage from './components/vowel/vowelPracticePage/VowelPracticePage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <MainNavbar></MainNavbar>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/practiceVowels" component={VowelPracticePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
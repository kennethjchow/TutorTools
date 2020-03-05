import React from 'react';

class Vowel extends React.Component {
    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    render() {
      return <h2 onClick={this.handleClick}>Short I</h2>;
    }
  }

export default Vowel;
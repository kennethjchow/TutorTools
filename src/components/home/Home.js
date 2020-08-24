import React from '../../../node_modules/react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

class Home extends React.Component {
    render() {
      return (
        <div className="homePage">
          <div className="titleSection">
            <section className="homePageMainText">
              <h4 className="headerMainText">Tutor Tools</h4>
              <h2 className="tagMainText">Endless practice for tutors to use with their students</h2>
              <p className="descriptionMainText">Easy to use online tools to help practice concepts taught by schools, teachers, and tutors</p>
              
            </section>
          </div>
        </div>
      );
    }
  }

export default Home;
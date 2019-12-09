import React from 'react';
import QuizService from '../../services/quiz';
import Header from '../Header';
import QuestionBlock from '../QuestionBlock';
import './Wizzard.css';
import Login from '../login';
import WizzardResult from '../WizzardResult/WizzardResult';

export default class Wizzard extends React.Component {
  state = {
    dateTime: null,
    person: null,
    id: 1,
    answered: null,
    finished: false
  }

  QuizConstructor = new QuizService();

  formatDate = (date, finished) => {
    let min = date.getMinutes();
    if (min < 10) min = '0' + min;
    let hh = date.getHours();
    if (hh < 10) hh = '0' + hh;
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    const dateTime = `${hh}:${min}:00 ${dd}/${mm}/${yy}`;
    this.setState({
      dateTime,
      finished: true
    });
  }

  writePersonalData = (e) => {
    e.preventDefault();
    const person = {};
    person.email = document.querySelector('#email').value;
    person.name = document.querySelector('#name').value;
    this.setState({
      person
    });
  }

  writeAnswers = (array) => {
    this.setState({
      answered: array
    });
  }



  render() {
    const states = { ...this.state };
    const { person } = this.state;
    if (!this.state.finished) {
      return (
        <div className='container my-format'>
          {
            (!person) ? <Login writePersonalData={this.writePersonalData} /> :
              <React.Fragment>
                <Header />
                <QuestionBlock
                  time={this.formatDate}
                  writeAnswersToWizzard={this.writeAnswers}
                  getData={this.QuizConstructor.getQuastions}
                  getAnswers={this.QuizConstructor.getAnswers}
                />
              </React.Fragment>
          }
        </div>
      );
    }
    else { return <WizzardResult res={states} /> }
  }
}


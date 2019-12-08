import React from 'react';
import QuizService from '../../services//quiz';
import Header from '../Header';
import QuestionBlock from '../QuestionBlock';
import './App.css';
import Login from '../login/login';

export default class App extends React.Component {
   state = {
     person: null, 
     id: null, 
     answered: null,
   }
  QuizConstructor = new QuizService();

    formatDate = (date) =>{
    let min = date.getMinutes();
    if (min < 10) min ='0'+min;
    let hh = date.getHours();
    if (hh < 10) hh ='0'+hh;
    let dd = date.getDate();
    if (dd < 10) dd ='0'+dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm ='0'+mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy='0'+yy;
    return `${hh}:${min}:00 ${dd}/${mm}/${yy}`;
  }
  
  writePersonalData = (e) => {
   e.preventDefault();
    const person = {};
    person.email = document.querySelector('#email').value;
    person.name = document.querySelector('#name').value;
    const date = new Date();
    person.date = this.formatDate(date);
    this.setState({
        person
    });
    console.log(person);
  }
  

  render() {
    const {person} = this.state;
    return (
      <div className='container my-format'>
        {(!person) ? <Login writePersonalData = {this.writePersonalData}/> :
        <>
        <Header />
        <QuestionBlock 
            getData={this.QuizConstructor.getQuastions} 
            getAnswers = {this.QuizConstructor.getAnswers} 
    /> 
    </>}
      </div>
    );
  }
}


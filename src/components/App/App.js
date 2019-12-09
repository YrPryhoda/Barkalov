import React from 'react';
import Wizzard from '../Wizzard';
//import AdminPanel from '../AdminPanel';
import './app.css';

export default class App extends React.Component {


  render() {
    return (
      <div className='container'>
        <Wizzard />
      </div>
    )
  }
}

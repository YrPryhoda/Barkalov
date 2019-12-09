import React from 'react';
import './login.css';

export default class Login extends React.Component {

  render() {
    return (
      <div className='my-form'>
      <form onSubmit={this.props.writePersonalData} >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter your email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1"> Enter your full name</label>
          <input type="text" className="form-control" id="name" placeholder="name" required/>
        </div>
        <button
          className="btn btn-primary">
          Begin
         </button>
      </form>
      </div>
    )
  }
}
import React, { Component } from 'react';
import fire from '../config/Fire';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './login.css'
import Form from 'react-bootstrap/Form'


class login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.loginErr = false
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
      loginErr: false
    };
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  reset() {
    this.setState({ email : '', password : ''});
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
        this.state.loginErr = true
      this.reset()
      });
  }
   
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

  render() {


    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div> 

      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label className="login-label">Email address</Form.Label>
          <Form.Control value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label className="login-label">Password</Form.Label>
          <Form.Control value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
        </Form.Group>
      </Form>
      <button type="submit" onClick={this.login} className="login-btn">Login</button>
      <button type="submit" onClick={this.signup} className="login-btn">Signup</button>
      {this.state.loginErr ? (<h5 className="login-label">Invalid Email or Password</h5>) : (<></>)}

 </div>
 

 
    );
  }
}
export default login;

import React, { Component } from 'react';


import  {Link} from 'react-router-dom'

 class LoginPage extends Component {
  

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };
     localStorage.setItem("username" , "Gaurav");
     localStorage.setItem("password" , "admin");

     localStorage.setItem("username2" , "Smith");
     localStorage.setItem("password2" , "hello");

     localStorage.setItem("username3" , "Ram");
     localStorage.setItem("password3" , "admin123");
  

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {

    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();
     
    this.checkvalidations();

    if(!this.state.error)
    {
      if(this.state.username == localStorage.getItem("username") && this.state.password == localStorage.getItem("password") || this.state.username == localStorage.getItem("username2") && this.state.password == localStorage.getItem("password2") || this.state.username == localStorage.getItem("username3") && this.state.password == localStorage.getItem("password3"))
      {

      this.props.history.push('/Loginscreen');

      // localStorage.setItem("loggedin","1");




    }else
    {
      alert('Wrong Username or Password');
    }
      
    }
 

  }

  checkvalidations(evt)
  {
    
    if (!this.state.username) {
      this.state.error='Username Error';
      return this.setState({ error: 'Username is required' });
    }
    else if (!this.state.password) {
      this.state.error='Password Error';
      return this.setState({ error: 'Password is required' });
    }
    else{
          return this.setState({ error: '' });   
    }

   
  }


  handleUserChange(evt) {

    this.setState({
      username: evt.target.value,

    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;


import React, { Component } from 'react';
import Loginpage from './routes/Loginpage';
import Loginscreen from './routes/Loginscreen';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'


export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <Loginpage {...props} />} />
      <Route path="/Loginscreen" render={props => <Loginscreen {...props} />} />
    </Switch>
  </BrowserRouter>
);
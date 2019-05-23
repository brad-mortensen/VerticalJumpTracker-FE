import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axiosWithAuth from './components/axiosWithAuth';
import './App.css';
import Authenticate from './components/Authentication/Authenticate.js';
//import Axios from 'axios';
import { Home, Goals, Contact, Navigation } from './components/nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      workouts: [],
      workout: {
        exercise: '',
        reps: '',
        sets: ''
      }
    }
  }

  componentDidMount() {
    axiosWithAuth.get('https://awsafran-vertical.herokuapp.com/workouts/all')
    .then((res) => {
      //console.log(res);
      this.setState({
        workouts: res.data[0],
        workout: this.state.workouts,
      });
    })
    .catch((err) => console.log(err));
  }
   render() {
    return (
      <div className="App">
        <div className='Nav'>
          <Navigation />
          <Route exact path="/" render={props => <Home workouts= {this.state.workouts} />}></Route>
          <Route path="/goals" component={Goals}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
      </div>
    );
  }
}

export default Authenticate(App);
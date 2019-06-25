import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ThankYou from './Components/ThankYou';
import HomePage from './Components/HomePage';

function App() {

  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/thankyou" component={ThankYou} />
   </Router>
  );
}


export default App;

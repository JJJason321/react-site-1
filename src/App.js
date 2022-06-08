import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Signup from './components/pages/Signup';
import Product from './components/pages/Product';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path={"/services"} exact component={Services}/>
          <Route path={"/products"} exact component={Product}/>
          <Route path={"/sign-up"} exact component={Signup}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

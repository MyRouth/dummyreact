// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
// import {Switch, Route} from "react-router-dom";
const App= () => {
  return (
    <>
    
      <h1>     welcome page  </h1>
      <Home />,
      <About/>,
      <Contact/>,
      <Service/>,
    {/* <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Service" component={Service} />
    <Route exact path="/Contact" component={Contact} />
    </Switch> */}
    </>
  );
}

export default App

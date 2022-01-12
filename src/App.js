// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './component/navbar';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import {Route,Switch} from "react-router-dom";
const App= () => {
  return (
    <>
    <Navbar />
             <center>
           <h1>     Welcome My Gaming World  </h1>
            {/* <About />
            <Contact />
            <Home />
            <Service /> */}
           </center>
      {/* <Home />,
      <About />,
      <Contact />,
      <Service />, */}
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Service" component={Service} />
    <Route exact path="/Contact" component={Contact} />
    </Switch>
    </>
  );
}

export default App


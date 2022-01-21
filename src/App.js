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
import Footer from './component/Footer';
import {Route,Switch} from "react-router-dom";
import ragistration from './component/ragistration';
import Access from './component/Access';
const App= () => {
  return (
    <>
    <Navbar />
             <center>
           {/* <h1 className="header-bar">     Indian Stock Excahnge  </h1> */}
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
    <Route exact path="/ragistration" component={ragistration} />
    </Switch>
    <Footer />
    </>
  );
}
export default App


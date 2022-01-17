import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../images/A-Complete-List-of-Stock-Exchanges-in-India.jpg"
const Access = (props) =>{
  return (
    <>
    <section id="header" className=" d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 MX-auto">
        <div className="row">
        <div className="col-md-6 pt-5 py-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1>
            {props.name}
          <strong className="brand-name"> Indian Stock Excahnge </strong>
        </h1>
        {props.section}
        <p className="my-3">
        
         </p>
         <h3> Connect with us </h3>
         <div className="mt-3">
           <NavLink to="/Contact"className="btn-get-started">
               Bombay S.E.
          </NavLink><br></br>
          <NavLink to="/Contact" className="btn-get-startede">
               National S.E.
          </NavLink>
         </div>
         
        </div>
        <div id="right" className="col-lg-6 order-lg-2 header-img">
          <img src={web} className="img-fluid animated" alt="home img" />
        </div>
        </div>
        </div>
        </div>
      </div>

    </section>
    </>
  );
}

export default Access

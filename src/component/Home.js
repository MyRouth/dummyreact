import React from 'react';
import web from "../images/A-Complete-List-of-Stock-Exchanges-in-India.jpg"

const Home = () =>{
  return (
    <>
    <section id="header" className=" d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 MX-auto">
        <div className="row">
        <div className="col-md-6 pt-5 py-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1>
          Welcome In
          <strong className="brand-name"> Indian Stock Excahnge </strong>
        </h1>
        <p className="my-3">
        Bombay Stock Exchange (BSE) in Mumbai, one of the two principal large stock exchanges of India. Calcutta Stock Exchange in Kolkata, a smaller stock exchange.
         India International Exchange (India INX) in Gift City. Metropolitan Stock Exchange of India Ltd. (MSE) in Mumbai.
         </p>
         <div className="mt-3">
           <a href="  " className="btn-get-started">
               Bombay S.E.
          </a><br></br>
          <a href="  " className="btn-get-startede">
               National S.E.
          </a>
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

export default Home;

import React from "react";
// import {Button} from "@material-ui/core";

const Ragistration = () => {
  return (
    <>
     <section classsName="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="signup-form">
            <h1 className="form-title"> Ragistration Page</h1>
             <form className="ragistar-form" id="ragister-form"> </form>
             <div className="form-group">
               <label htmlFor="name">
                 <i className="zmdi zmdi-account material-icons-name"></i>
                 </label>
                 <input type="text" name="name" id="name" autoComplete="off" placeholder=" Your Name "/>
             </div><br></br>

             <div className="form-group">
               <label htmlFor="email">
                 <i className="zmdi zmdi-email material-icons-name"></i>
                 </label>
                 <input type="email" name="email" id="email" autoComplete="off" placeholder=" Your email "/>
             </div><br></br>

             <div className="form-group">
               <label htmlFor="phone">
                 <i className="zmdi zmdi-phone material-icons-name"></i>
                 </label>
                 <input type="number" name="phone" id="phone" autoComplete="off" placeholder=" Your phone "/>
             </div><br></br>

             <div className="form-group">
               <label htmlFor="Work">
                 <i className="zmdi zmdi-slideshow material-icons-name"></i>
                 </label>
                 <input type="text" name="Work" id="Work" autoComplete="off" placeholder=" Your Profession "/>
             </div><br></br>
             </div>
           </div>
        </div>
     </section>
     </>
  );
}


export default Ragistration
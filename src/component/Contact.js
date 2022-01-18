import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
     fullname:"",
     phone:"",
     email:"",
     msg:"",
  });

  const InputEvent = (event) =>{
    const {name, value} = event.target;

    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      ` Name  ${data.fullname}. 
        Mobiel Number  ${data.phone}.
        email  ${data.email}
        Message  ${data.msg} `
    )
  };

  return (
    <>
    <div className="my-5">
    <h1 className="text-center"> Contact us  </h1>
    </div>
    <div className="container contact_div">
    <div className="row">
      <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit}>
        <div class="mb-3">
         <label 
         for="exampleFormControlInput1"
          class="form-label"> Enter Full Name</label>
          <input 
          type="Text" 
          class="form-control" 
          name="fullname"
          value={data.fullname}
          onChange={InputEvent}
          id="exampleFormControlInput1" 
          placeholder="Enter Full Name" />
      </div>
      <div class="mb-3">
         <label 
         for="exampleFormControlInput1"
          className="form-label">Phone Number</label>
          <input 
          type="number" 
          className="form-control"
          name="phone"
          value={data.phone}
          onChange={InputEvent} 
          id="exampleFormControlInput1" 
          placeholder="Phone Number" />
      </div>
      <div class="mb-3">
         <label 
         for="exampleFormControlInput1"
          class="form-label">Email address</label>
          <input 
          type="email" 
          class="form-control"
          name="email"
          value={data.email}
          onChange={InputEvent} 
          id="exampleFormControlInput1" 
          placeholder="name@example.com" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" 
        class="form-label">Some Message</label>
          <textarea 
          class="form-control"
          name="msg"
          value={data.msg}
           onChange={InputEvent} 
          id="exampleFormControlTextarea1" 
          rows="3"></textarea>
      </div>
      <div class="col-12">
        <button class="btn btn-outline-primary" type="submit">Submit form</button>
      </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}
 
export default Contact;

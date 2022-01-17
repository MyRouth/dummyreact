import React from "react";
import web from "../images/gettyimages.jpg"
const S_card = (props) =>{
  return (
      <>
        <div className="col-md-4 col-10 mx-auto">
    <div class="card" >
  <img src={props.img} className="card-img-top" alt={props.img} />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.detail}</p>
    <a href="#" className="btn btn-primary">{props.button}</a>
  </div>
</div>
</div>
</>
  )
}

export default S_card
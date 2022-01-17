import React from "react";
import S_card from "./S_card";
import S_data from "../component/S_data";
const Service= () =>{
  return (
    <>
    <div className="my-5">
    <h1 className="text-center">welcome Serivce page</h1>
     <div classNamee="Container-fluid mb-5">
       <div className="row">
       <div className="col-10 mx-auto">
         <div className="row">
           <div className="row gy-4" />
         {
           S_data.map((value, index) =>{
             return <S_card 
             key={index}
             img={value.img}
             title={value.title}
             detail={value.detail}
             button={value.button}/>
           })
         }
          </div>
         </div>
       </div>
       </div>
      </div>
    
    </>
  );
}

export default Service;

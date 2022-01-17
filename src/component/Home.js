import React from 'react';
import web from "../images/A-Complete-List-of-Stock-Exchanges-in-India.jpg"
import Access from "./Access"
const Home = () =>{
  return (
    <>
      <Access name="Welcome In "
      imgsrc={web}
      visit="/contact"
      btname="Connect to BSE"/>

    </>
  );
}

export default Home;

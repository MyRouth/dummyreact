import React from 'react';
import Access from "./Access";
import web from "../images/stock-exchanges-in-india-vector.png";
const About = () => {
  return (
    <>
      <Access name="About"
      section="The BSE and NSE
      Most of the trading in the Indian stock market takes place on its two stock exchanges: the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE). The BSE has been in existence since 1875.3 The NSE, on the other hand, was founded in 1992 and started trading in 1994.4 However, both exchanges follow the same trading mechanism, trading hours, and settlement process.
      As of November 2021, the BSE had 5,565 listed firms,5 whereas the rival NSE had 1,920 as of Mar. 31, 2021.6"
      imgsrc={web}
      visit="/Service"
      btname="Connect to NSE"/>

    </>
  );
}

export default About;

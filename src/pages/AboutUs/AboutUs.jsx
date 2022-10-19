import React from 'react';
import About from "../../components/About/About";
function AboutUs({aboutUsData}) {

  const aboutHeaderData = aboutUsData.aboutHeader;
  const aboutFooterData = aboutUsData.aboutBody;
  return (
    <div className={"about-us"}>
        <About aboutHeaderData={aboutHeaderData} aboutBodyData={aboutFooterData}/>
    </div>
  );
}

export default AboutUs;
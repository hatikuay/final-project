import React from 'react';
import "./About.scss"

function About({aboutHeaderData, aboutBodyData}) {

  return (
    <div className={"about"}>
      <div className={"about-info"}>
        <br/>
        <h1>{aboutHeaderData[0].title}</h1>
        <br/>
        <p>{aboutHeaderData[0].aboutDesc}</p>
        <br/>
        <div className={"images-container"}>
          {aboutHeaderData[0].images.map((info, index) => {
            return(
              <div className={"image-container"} key={index}>
                <img alt={"fargo"} src={info.image}/>
                <h5>{info.imageTitle}</h5>
              </div>
            )
          })}
        </div>

        <div>
          {aboutBodyData[0].map((info, index) => {
            return (
              <div key={index}>
                <h3>{info.title}</h3>
                <br/>
                <div>
                  {info.desc.map((info,index) => {
                    return (
                      <p key={index}>{info}</p>
                    )
                  })}
                </div>
                <br/>
              </div>
            )
          })}
        </div>
      </div>
      </div>
  );
}

export default About;
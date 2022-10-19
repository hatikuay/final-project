import React from 'react';
import "./BlueVoyageInfo.scss"
import "./BlueVoyageInfo.scss"

function BlueVoyageInfo({blueVoyageHeaderData, blueVoyageFooterData}) {
  console.log(blueVoyageHeaderData)
  return (
    <div className={"blue-voyage"}>
      <br/>
      <div className={"blue-voyage-info"}>
        <h1>Mavi Yolculuk Nedir ?</h1>
        <br/>
        {blueVoyageHeaderData[0].map((info, index) => {
          return (
            <div className={"blue-voyage-container"} key={index}>
              {info.desc.map((info, index) => {
                return <p key={index}>{info}</p>
              })}
              <br/>

              <div className={"images"}>
                {info.images.map((image, index) => {
                  return <img alt={"fargo"} src={image} key={index}/>
                })}
              </div>
              <br/>
              {blueVoyageFooterData[0].desc.map((desc, index) => {
                return <p key={index}>{desc}</p>
              })}
              <br/>
            </div>
            )
        })}


      </div>



    </div>
  );
}

export default BlueVoyageInfo;
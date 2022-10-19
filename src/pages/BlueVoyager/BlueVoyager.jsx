import React from 'react';
import BlueVoyageInfo from "../../components/BlueVoyageInfo/BlueVoyageInfo";

function BlueVoyager({blueVoyageData}) {

  const blueVoyageHeaderData = blueVoyageData.data;
  const blueVoyageFooterData = blueVoyageData.footerData;
  return (
    <div className={"blue-voyager"}>
      <BlueVoyageInfo blueVoyageFooterData={blueVoyageFooterData} blueVoyageHeaderData={blueVoyageHeaderData}/>
    </div>
  );
}

export default BlueVoyager;
import React from 'react';
import DropDown from "../DropDown/DropDown";
import "./FAQ.scss"

function Faq({dropdownMenuData}) {
  return (
    <div className={"faq"}>
      {dropdownMenuData.map((info, index) => {
        return(
          <DropDown data={info} key={index}></DropDown>
        )
      })}
    </div>
  );
}

export default Faq;
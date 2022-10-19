import React, {useState} from 'react';
import "./DropDown.scss";

function DropDown({data}) {

  const [isOpen, setIsOpen] = useState(false);

  function setDropDown () {

    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  return (
    <div className={"dropdown"}>
      <div className={"title-container"} onClick={setDropDown}>
        <h5 className={"title"} >{data.title}</h5>
        <img src={"\thttps://captainfargo.com/static/main/arrow_down.2c0862a67bfb.svg"}/>
      </div>
        {isOpen ? <div className={"content"}>
            {data.desc.map((desc, index) => {
              if (isOpen) {
                return (
                  <p className={"description"} key={index}>{desc}</p>
                )
              }
            })}
          </div>
          : <></>
        }


    </div>

  )
}

export default DropDown;
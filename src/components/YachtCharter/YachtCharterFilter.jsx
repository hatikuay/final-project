import React from 'react';
import "./yachtCharterFilter.scss"
function YachtCharterFilter(props) {
  return (
    <div className={"filter"}>
      <div className={"filter-box"}>
        <h5>Filtreler</h5>
        <h6>Ekler</h6>
        <div className={"check-button"}>
          <input type={"checkbox"}/>
          Kano
        </div>
        <div className={"check-button"}>
          <input type={"checkbox"}/>
          Water sports
        </div>
        <div className={"check-button"}>
          <input type={"checkbox"}/>
          Sail
        </div>
      </div>
    </div>
  );
}

export default YachtCharterFilter;
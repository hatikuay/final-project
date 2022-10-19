import React from 'react';
import "./review.scss"
function Review(props) {
  return (

      <div className={"review-bar"}>
        <div className={"review-bar-container"}>
          <div className={"row"}>
            <div className={"input-group routes"}>
              <select className={"form-control custom-select"}>
                <option value={"fethiye"}>Fethiye</option>
              </select>
            </div>
            <div className={"input-group dates"}>
              <input className={"form-control"} id={"cabin-date"}
                     value placeholder={"Tarih Seç"} readOnly/>
            </div>
          </div>
          <p>İstediğiniz kalkış limanını ve tarihi seçin, teknelerimizi listeleyelim.</p>
        </div>
      </div>

  );
}

export default Review;
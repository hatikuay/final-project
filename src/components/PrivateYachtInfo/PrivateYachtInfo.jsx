import React from 'react';
import "./privateYachtInfo.scss"
import ImageSlider from "../ImageSlider/ImageSlider";

function PrivateYachtInfo({yachtDetail}) {
  return (
    <div className={"private-yacht-info"}>
      <div className={"header-yacht-info"}>
        <div className={"yacht-info-box"}>
          <h1>{yachtDetail.generalInfo.title}</h1>
          <div className={"features"}>
            {yachtDetail.generalInfo.generalServicesIncludes.map((include, index) => {
              return (
                <span key={index} className={"feature"}><img key={index} className={"icon"}
                                                             src={"https://captainfargo.com/media/ic_diving.png"}/>{include}</span>
              );
            })}
            <a
              href={""}>+ {yachtDetail.detailInfo.servicesIncludes.length - yachtDetail.generalInfo.generalServicesIncludes.length} HİZMET</a>
          </div>
        </div>
        <div className={"yacht-price-box"}>
          <div className={"row"}>
            <div className={"date-row"}>
              {yachtDetail.detailInfo.startingDate}
              <br/>
              {yachtDetail.detailInfo.endDate}
            </div>
            <div className={"price-row"}>
              <span className={"price-discounted"}>{yachtDetail.generalInfo.price}₺</span>
              <span className={"price-discounted-percentage"}>% {yachtDetail.generalInfo.discountRate} indirim</span>
              <span
                className={"price"}><br/>{Math.round(yachtDetail.generalInfo.price - (yachtDetail.generalInfo.price * yachtDetail.generalInfo.discountRate / 100))} ₺</span>
            </div>
          </div>
        </div>
      </div>
      <div className={"slider"}>
        <div className={"image-slider"}></div>
        <div className={"map"}></div>
      </div>
      <div className={"private-yacht"}>
        <h2>Özel Yat Nedir?</h2>
        <p>{yachtDetail.detailInfo.privateYacht}</p>
      </div>
      <hr/>
      <div className={"details"}>
        <h2>Teknik Bilgiler</h2>
        <div className={"row"}>
          {yachtDetail.detailInfo.technicalInfo.map((technicalInfo, index) => {
            return (
              <div className={"column"}>
                <h4>{Object.keys(technicalInfo)}</h4>
                <p>{Object.values(technicalInfo)}</p>
              </div>
            )
          })}
        </div>
        <hr/>
      </div>
      <div className={"important-notes"}>
          <div className={"details"}>
            <h2>Detaylar</h2>
            <p>{yachtDetail.detailInfo.detail}</p>
          </div>
        <div className={"notes"}>
          <h2>Önemli Notlar</h2>
          <ul>{yachtDetail.detailInfo.importantNotes.map((notes, index) => {
          return (
            <li>{notes}</li>
            )
          })}</ul>
        </div>
      </div>
      <hr/>
      <div className={"services"}>
        <div className={"includes"}>
          <h2>Fiyata Dahil Olan Hizmetler</h2>
          <ul>{yachtDetail.detailInfo.servicesIncludes.map((includes, index) => {
            return(
              <li>
                <img src={"https://captainfargo.com/static/main/ic_included.fd4d105c35ac.png"}/>
                <p>{includes}</p>
              </li>
            )
          })}</ul>
        </div>
        <div className={"includes"}>
          <h2>Fiyata Dahil Olmayan Hizmetler</h2>
          <ul>{yachtDetail.detailInfo.servicesNotIncludes.map((includes, index) => {
            return(
              <li>
                <img src={"https://captainfargo.com/static/main/ic_excluded.d11f3b18d238.png"}/>
                <p>{includes}</p>
              </li>
            )
          })}</ul>
        </div>
      </div>

    </div>
  );
}

export default PrivateYachtInfo;
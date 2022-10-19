import React, {useState} from 'react';
import "./SearchBox.scss"
import {useNavigate} from "react-router";
function SearchBox(props) {

  const history = useNavigate();

  const privateYachtCharter = () => {
      history("/privateYachtCharter");
  }
  const [isOpen, setIsOpen] = useState("cabin");


  return (
    <div className={"search-box-container"}>
      <ul className={"nav nav-tabs"}>
        <li
          onClick={() => setIsOpen("cabin")}
          className={isOpen === "cabin" ? "nav nav-item cabin active" : "nav nav-item cabin"}>
          <span>Kabin Kirala</span>
        </li>
        <li
          onClick={() => setIsOpen("private")}
          className={isOpen === "private" ? "nav nav-item private active" : "nav nav-item private"}>
          <span>Özel Yat Kirala</span>
        </li>
        <li
          onClick={() => setIsOpen("fellowship")}
          className={isOpen === "fellowship" ? "nav nav-item fellowship active" : "nav nav-item fellowship"}>
          <span>Arkadaşlık No</span>
        </li>
      </ul>
      <div className={"search-box"}>
        <div className={isOpen === "cabin" ? "tab-content  active" : "tab-content passive"}>
          <div className={"row"}>
            <div className={"input-group routes"}>
              <select className={"form-control custom-select"}>
                <option value={"bozburun-selimiye"}>Bozburun - Selimiye - 4 Gün</option>
              </select>
            </div>
            <div className={"input-group dates"}>
              <input className={"form-control"} id={"cabin-date"}
                     value placeholder={"Tarih Seç"} readOnly/>
            </div>
            <div className={"input-group"}>
              <button className={"btn-search"} type={"button"} id={"cabin-go"}>
                <span className={"text"}>GÖRÜNTÜLE</span>
              </button>
            </div>
          </div>
          <div className={"text-container"}>
            İstediğiniz rota ve tarihi seçin, seçtiğiniz rotanın detaylarını inceleyin.
          </div>
        </div>
        <div className={isOpen === "private" ? "tab-content  active" : "tab-content passive"}>
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
            <div className={"input-group"}>
              <button className={"btn-search"} type={"button"} id={"cabin-go"} onClick={privateYachtCharter}>
                <span className={"text"}>TEKNE BUL</span>
              </button>
            </div>
          </div>
          <div className={"text-container"}>
            İstediğiniz kalkış limanını ve tarihi seçin, teknelerimizi listeleyelim.
          </div>
        </div>
        <div className={isOpen === "fellowship" ? "tab-content  active" : "tab-content passive"}>
          <div className={"row"}>
            <div className={"input-group routes"}>
              <select className={"form-control custom-select"}>
                <option value={"fellowship-no"}>Arkadaşlık No</option>
              </select>
            </div>
            <div className={"input-group"}>
              <button className={"btn-search"} type={"button"} id={"cabin-go"} onClick={privateYachtCharter}>
                <span className={"text"}>YOLCULUĞU BUL</span>
              </button>
            </div>
          </div>
          <div className={"text-container"}>
            Sizinle paylaşılan Arkadaşlık No kodunu girerek ilgili yolculuğun detaylarına ulaşabilirsiniz.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
import React from 'react';
import "./productList.scss"
import {useNavigate} from "react-router";
import {YachtDetail} from "../../pages/PrivateYachtDetail/yachtDetail";

function ProductList(props) {

  const history = useNavigate();

  const privateYachtDetail = (id) => {

    history("/privateYachtDetail",
      {state: {
        yachtId : id,
        }});
  }

  const yachtInfo = YachtDetail;
  return (
    <div className={"product"}>
      <div className={"product-list"}>
        <h3>
          30/07/2022 Kalkışlı Tekneler
        </h3>

          {yachtInfo.data.map((yachtDetail, index) => {
            return (
              <div className={"yacht-box"}>
                <div className={"yacht-row"}>
                  <a>
                    <img
                      src={yachtDetail[0].generalInfo.image}/>
                  </a>
                  <div className={"text-container"}>
                    <a>
                      <h3>{yachtDetail[0].generalInfo.title}</h3>
                    </a>
                    <p>{yachtDetail[0].generalInfo.subTitle}</p>
                  </div>
                  <div className={"price-box"}>
                    <div className={"price-header"}>
                      <span className={"price-discounted"}>{yachtDetail[0].generalInfo.price}₺</span>
                      <span className={"price-discounted-percentage"}> %{yachtDetail[0].generalInfo.discountRate} indirim</span>
                    </div>
                    <div className={"price"}>
                      {Math.round(yachtDetail[0].generalInfo.price - (yachtDetail[0].generalInfo.price * yachtDetail[0].generalInfo.discountRate / 100))}₺
                    </div>
                    <div className={"price-per"}>
                      /hafta
                    </div>
                    <button className={"inspect-button"} onClick={() => privateYachtDetail(index)}>
                      İNCELE
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <div className={"custom-date-form"}>
        <form>
          <p>Özel tarih ile rezervasyon talebi oluşturmak için lütfen aşağıdaki formu doldurun. Müsaitlik olması
            durumunda size yardımcı olmaktan mutluluk duyacağız.</p>
          <div className={"input-row"}>
              <div className={"row"}>
                    <div className={"input-group"}>
                      <input name={"name"} type={"text"} placeholder={"İsim - Soyisim"}/>
                    </div>
                <div className={"input-group"}>
                  <input name={"email"} type={"email"} placeholder={"E-Posta Adresi"}/>
                </div>
              </div>
            <div className={"row"}>
              <div className={"input-group"}>
                <input name={"phone"} type={"text"} placeholder={"Telefon No"}/>
              </div>
              <div className={"input-group"}>
                <input name={"port"} type={"text"} placeholder={"Kalkış Limanı"}/>
              </div>
            </div>
            <div className={"row"}>
              <div className={"input-group"}>
                <input name={"starting-date"} type={"text"} placeholder={"Başlangıç Tarihi"}/>
              </div>
              <div className={"input-group"}>
                <input name={"end-date"} type={"text"} placeholder={"Bitiş Tarihi"}/>
              </div>
            </div>

            <div className={"row"}>
              <div className={"input-group"}>
                <textarea name={"notes"} placeholder={"Notlar (Yetişkin, çocuk ve bebek yolcu sayısını mutlaka belirtiniz)"}/>
              </div>
            </div>
          </div>
          <button>
            REZERVASYON TALEBİ GÖNDER
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductList;
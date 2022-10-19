import React from 'react';
import "./SıgnInModal.scss"
import {formSelect} from "./formSelect";

function SignInModal({handleClose, show}) {
  const data = formSelect.data[0].option;
  const showHideClassName = show ? "signIn-modal display-block" : "signIn-modal display-none";
  return (
    <div className={showHideClassName}>
      <div className={"signIn-modal-main"}>
        <div className={"signIn-modal-content"}>
          <div className={"signIn-modal-header"}>
            <h5>Üye Olun</h5>
            <img src={"https://captainfargo.com/static/main/ic_close_dialog.69747650bbd4.png"}
                 onClick={() => handleClose()}/>
          </div>

          <form className={"signIn-form"}>
            <div className={"signIn-form-body"}>
              <div className={"social-signIn"}>
                <div className={"social"}>
                  <button id={"google-signIn-btn"} className={"google-button button"}>
                    <img src={"https://captainfargo.com/static/main/ic_google.a93e1fbefc5d.png"} className={"icon"}/>
                    Google
                  </button>
                  <button id={"facebook-login-btn"} className={"facebook-button button"}>
                    <img src={"\thttps://captainfargo.com/static/main/ic_facebook.1021f4fa8b88.png"}
                         className={"icon"}/>
                    Facebook
                  </button>
                </div>
              </div>
              <p>veya e-posta ile üye olun</p>
              <div className={"form-row"}>
                <div className={"form-input"}>
                  <div className={"form-control"}>
                    <input placeholder={"İsim"} id={"first-name"} className={"form-control"}
                           type={"text"} name={"first-name"} minLength={2} required
                    />
                    <input placeholder={"Soyisim"} id={"last-name"} className={"form-control"}
                           type={"text"} name={"last-name"} minLength={2} required
                    />
                  </div>
                  <div className={"form-control"}>
                    <input placeholder={"E-posta adresi"} id={"email"} className={"form-control"}
                           type={"email"} name={"email"} required
                    />
                  </div>
                  <div className={"form-control"}>
                    <input placeholder={"Telefon"} id={"telephone"} className={"form-control"}
                           type={"tel"} name={"telephone"} required
                    />

                  </div>
                  <div className={"form-control"}>
                    <select id={"country-code"} className={"form-control"} name={"nationality"} required>
                      {data.map((country, index) => {
                        return (
                          <option value={country.value} key={index}>{country.text}</option>
                        )
                      })}
                    </select>
                    <input placeholder={"Doğum Tarihi (gün-ay-yıl)"} id={"signup-birth-date"} className={"form-control"}
                           type={"text"} name={"birth-date"} minLength={2} required
                    />

                  </div>
                  <div className={"form-control"}>
                    <input placeholder={"Şifre"} id={"password"} className={"form-control"}
                           type={"password"} name={"password"} required
                    />

                  </div>

                  <div className={"form-check"}>
                    <input className={"form-check-input"} id={"agreement"} type={"checkbox"}
                           required/>
                    <label className={"form-check-label"}>
                      <a href={"#"}>Gizlilik Politikası</a>
                      <> ve </>
                      <a href={"#"}>Kişisel Verilerin
                        İşlenmesine İlişkin Aydınlatma ve Rıza Metni</a>
                      <>'ni onaylıyorum.</>
                    </label>
                  </div>
                </div>
              </div>
              <button className={"signIn-button"}>Üye Ol</button>
            </div>
          </form>
          <div className={"text-center"}>
            Zaten üye misiniz?
            <a href={"#"}>
              <u>Giriş Yapın</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
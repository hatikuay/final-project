import React from 'react';
import "./LoginModal.scss"

function LoginModal({handleClose, show}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (<div className={showHideClassName}>
    <div className={"modal-main"}>
      <div className={"modal-content"}>
        <div className={"modal-header"}>
          <h5>Giriş Yapın</h5>
          <img src={"https://captainfargo.com/static/main/ic_close_dialog.69747650bbd4.png"}
               onClick={() => handleClose()}/>
        </div>
        <form className={"login-form"}>
          <div className={"login-form-body"}>
            <div className={"input-group"}>
              <input placeholder={"E-Posta Adresi"} id={"email"} className={"form-control"}
                     type={"email"} name={"email"} required
              />
            </div>
            <div className={"input-group"}>
              <input placeholder={"Şifre"} id={"password"} className={"form-control"}
                     type={"password"} name={"password"} required
              />
            </div>
            <div className={"text-right"}>
              <a href={"#"}>
                <u>Şifremi Unuttum</u>
              </a>
            </div>
            <br/>
            <button className={"login-button"}>Giriş Yap</button>
            <br/>
            <br/>
            <p>veya şununla devam edin</p>

            <div className={"social-login"}>
              <div className={"social"}>
                <button id={"google-login-btn"} className={"google-button button"}>
                  <img src={"https://captainfargo.com/static/main/ic_google.a93e1fbefc5d.png"} className={"icon"}/>
                  Google
                </button>
                <button id={"facebook-login-btn"} className={"facebook-button button"}>
                  <img src={"\thttps://captainfargo.com/static/main/ic_facebook.1021f4fa8b88.png"} className={"icon"}/>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        <div className={"text-center"}>
          Hesapınız Yok Mu?
          <a href={"#"}>
            <u>Buradan Kaydolun</u>
          </a>
        </div>
        </form>
      </div>
    </div>
  </div>);
}

export default LoginModal;
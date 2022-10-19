import React, {useState} from 'react';
import './footer.scss'
import {Link, NavLink} from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import SignInModal from "../SignInModal/SignInModal";

function Footer() {

  const [onOpenModalLogin, setOnOpenModalLogin] = useState(false);
  const [onOpenModalSignIn, setOnOpenModalSignIn] = useState(false);


  function openModalLogin () {
    setOnOpenModalLogin(true);
    closeModalSignIn();
  }

  function  closeModalLogin () {
    setOnOpenModalLogin(false);
  }

  function openModalSignIn () {
    setOnOpenModalSignIn(true);
    closeModalLogin();
  }

  function  closeModalSignIn () {
    setOnOpenModalSignIn(false);
  }
    return (
      <div className={"footer"}>
        <div className={"container"}>
          <div className={"left-side"}>
            <Link to={"/"}>
              <img src="https://captainfargo.com/static/main/logo_white.e7a528a00d67.png"/>
            </Link>

            <p className={"address"}>Ömer Avni Mah. Beytül Malcı Sk. No: 10/9 Kabataş Beyoğlu/İstanbu</p>
            <hr/>
            <p className={"tel-no"}>
              0850 304 85 99
            </p>
            <p className={"mail"}>
              info@captainfargo.com
            </p>
          </div>
          <div className={"right-side"}>
            <ul>
              <Link to={"/blueVoyage"}>Mavi Yolculuk</Link>
              <Link to={"/about"}>Hakkımızda</Link>
              <Link to={"/faq"}>SSS</Link>
              <Link to={"/blog"}>Blog</Link>
              <li onClick={openModalLogin}>Giriş Yap</li>
              <li onClick={openModalSignIn}>Üye Ol</li>
            </ul>
          </div>

        </div>
        <LoginModal show={onOpenModalLogin} handleClose={() => closeModalLogin()}></LoginModal>
        <SignInModal show={onOpenModalSignIn} handleClose={() => closeModalSignIn()}></SignInModal>
      </div>
    );
}

export default Footer;

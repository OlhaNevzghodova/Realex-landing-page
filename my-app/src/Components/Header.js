import React from 'react';
import Nav from "./Nav";
import Button from "./Button";
import ButtonGetStarted from "./ButtonGetStarted";
import logo from "../images/Vectorlogo.png"
import "../header.scss"

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="realex-logo"/>
            </div>
            <Nav/>
            <div className="header__buttons-bar">
                <button className="header__buttons-bar__button_inactive">Login</button>
                <button className="header__buttons-bar__button_active">Get Started</button>
            </div>
        </header>
    )
}
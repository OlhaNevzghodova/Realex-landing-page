import React from "react";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Nav from "./Nav";
import ButtonGetStarted from "./ButtonGetStarted";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__contact-info">
                <div className="footer__contact-info__logo">
                    <img src="" alt=""/>
                </div>
                <div className="footer__contact-info__social-media">
                    <h5></h5>
                    <FontAwesomeIcon icon={icon({name: 'facebook', style: 'brands'})} />
                    <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} />
                    <FontAwesomeIcon icon={icon({name: 'pinterest', style: 'brands'})} />
                    <FontAwesomeIcon icon={icon({name: 'instagram', style: 'brands'})} />
                    <FontAwesomeIcon icon={icon({name: 'linkedin', style: 'brands'})} />
                </div>
                <div className="footer__contact-info__nav">
                    <h5>Company</h5>
                    <Nav />
                </div>
                <div className="footer__contact-info__resources">
                    <h5>Resources</h5>
                    <ul>
                        <li>Help Center</li>
                        <li>Blog</li>
                        <li>Privacy Center</li>
                        <li>Security & Compliance</li>
                    </ul>
                </div>
            </div>
            <div className="footer__email">
                <h5>Discover cutting-edge strategies for customer loyalty</h5>
                <input type="email"/>
                <ButtonGetStarted />
            </div>
            <div className="footer__info">
                <span>© 2023 Realex. All Rights Reserved.</span>
                <div>
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span>
                </div>
            </div>
        </footer>
    )
}
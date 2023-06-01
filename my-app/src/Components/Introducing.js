import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {icon} from '@fortawesome/fontawesome-svg-core/import.macro'

const experts = [
    {
        name: "Mariana Vathi",
        position: "Advisor",
        imgSrc: "Realex-landing-page/images/medium-shot-woman-holding-notebooks.jpg",
    },
    {
        name: "Martina Hoxha",
        position: "Advisor",
        imgSrc: "Realex-landing-page/images/woman-holding-papers-and-standing-isolated-on-blue.jpg",
    },
    {
        name: "Aaron Wong",
        position: "Advisor",
        imgSrc: "Realex-landing-page/images/medium-shot-man-working-at-desk.jpg",
    },
]

export default function Introducing() {
    return (
        <section className="introducing">
            <h2>Introducing the Group of Highly Skilled Experts</h2>
            <div className="introducing__carousel">
                <ul className="introducing__carousel__list">
                    {experts.map(({name, position, imgSrc})=> {
                        return <li key={crypto.randomUUID()} className="introducing__carousel__list__item">
                            <img src={imgSrc} alt=""/>
                            <p>{position}</p>
                            <div className="introducing__carousel__list__sm-bar">
                                <FontAwesomeIcon icon={icon({name: 'facebook', style: 'brands'})} />
                                <FontAwesomeIcon icon={icon({name: 'instagram', style: 'brands'})} />
                                <FontAwesomeIcon icon={icon({name: 'linkedin', style: 'brands'})} />
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}
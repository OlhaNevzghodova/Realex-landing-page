import React from "react";
import Button from "./Button";

const expertiseItems = [
    {
        title: "Design & build",
        text: "Creating spaces that promote positive change for your business, clients, communities, and the environment is an essential step towards building a sustainable and responsible business model.",
    },
    {
        title: "Investment & finance",
        text: "By seeking specialized advice, you can gain a better understanding of the different investment options available to you, and choose the ones that are best suited to help you achieve your financial goals.",
    },
    {
        title: "Manage real assets investment",
        text: "A strategic approach to real assets investment solutions involves identifying investment opportunities that align with the investor's long-term financial goals and risk tolerance. Investment managers analyze market trends.",
    },
]

export default function Expertise() {
    return (
        <section className="expertise">
            <h2 className="expertise__title">We use our expertise to help you achieve your goals.</h2>
            <ul className="expertise__list">
                {expertiseItems.map(({title, text}) => {
                    return <li key={crypto.randomUUID()}>
                        <div>
                            <h3>{title}</h3>
                            <p>{text}</p>
                            <Button text="What We Do"/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}
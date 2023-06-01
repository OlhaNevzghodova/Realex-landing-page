import React from "react";
import Button from "./Button";

export default function ModernWay() {
    return (
        <section className="modernway">
            <div className="modernway__image">
                <img src="" alt=""/>
            </div>
            <div className="modernway__description">
                <h2 className="modernway__description__title">The new, modern way to lease units</h2>
                <p className="modernway__description__text">New approach to leasing apartment units in a
                    multi-unit residential building that is more contemporary, up-to-date, and perhaps more efficient or
                    effective than traditional leasing methods.This could involve the use of technology, such as online
                    leasing portals or virtual apartment tours.</p>
                <Button text="Learn More"/>
            </div>
        </section>
    )
}
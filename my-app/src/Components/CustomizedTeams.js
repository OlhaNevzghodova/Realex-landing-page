import React from "react";
import Button from "./Button";

export default function CustomizedTeams() {
    return (
        <section className="teams">
            <h2>Customized teams for every client</h2>
            <p>We tailor teams to meet the unique needs of each client and project. Our professionals work in close
                partnership with the client, always keeping their best interests in mind. Approach involves customizing
                teams to suit the specific requirements of every client and project.</p>
            <Button text="About Us" />
            <div className="teams__image"></div>
        </section>
    )
};
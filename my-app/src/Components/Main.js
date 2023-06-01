import React from "react";
import Home from "./Home";
import CustomizedTeams from "./CustomizedTeams";
import Introducing from "./Introducing";
import ModernWay from "./ModernWay";
import Volumes from "./Volumes";
import Expertise from "./Expertise";
import Footer from "./Footer";

export default function Main() {
    return (
        <main className="main">
            <Home />
            <CustomizedTeams />
            <Introducing />
            <ModernWay />
            <Volumes />
            <Expertise />
        </main>
    )
};
import Navbar from "../components/navbar";
import Card from "../components/home/card";
import "./index.css";
// import LogoPlaceholder from "../images/LogoPlaceholder.svg"

import * as React from "react";

const home = () => {
    return (
        <>
            <Navbar />
            <img src="https://static.igem.wiki/teams/4642/wiki/logos/project/light-blue-animated.webp" className="logo"/>
            <section className="container">
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </>
    )
}

export default home
import Navbar from "../components/navbar";
import Card from "../components/home/card";
import "./index.css";
import bioPhoto from "../images/bioGang.png";
// import LogoPlaceholder from "../images/LogoPlaceholder.svg"


import * as React from "react";

const home = () => {
    return (
        <>
            <Navbar />
            <img src="https://static.igem.wiki/teams/4642/wiki/logos/project/light-blue-animated.webp" className="logo"/>
            <section className="container">
                <Card title="Biology" source={bioPhoto}/>
                <Card title="Hardware" source={"https://static.igem.wiki/teams/4642/wiki/homepage/software.webp"}/>
                <Card title="Software" source={"https://static.igem.wiki/teams/4642/wiki/homepage/software.webp"}/>
                <Card title="Human Practices" source={"https://static.igem.wiki/teams/4642/wiki/homepage/software.webp"}/>
                <Card title="Modelling" source={"https://static.igem.wiki/teams/4642/wiki/homepage/software.webp"}/>
            </section>
        </>
    )
}

export default home
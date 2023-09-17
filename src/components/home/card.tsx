import * as React from "react";
import "./card.css";

function Card(props: any) {
    return (
        <div className="card">

            {/* <img src="" className="cardImage"/> */}
            <img src={props.source} className="cardImage"/>

            <div className="textContainer">
                <h1>{props.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
            </div>

        </div>
    )
}

export default Card
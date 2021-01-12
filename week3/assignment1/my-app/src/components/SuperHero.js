import React from "react"

function SuperHero(props) {
    return (
        <div style={{textAlign: "center"}}>
            <h1 id="name" onClick={() => props.handleClick(props.catchPhrase)}>{props.name}</h1>
            <img id="image" onMouseOver={() => props.handleClick(props.catchPhrase)} src={props.imageName} alt="Awesome" style={{height: "15%", width: "15%"}}/>
            <h3 id="show">From the Show: {props.show}</h3>
        </div>
    )
}

export default SuperHero;
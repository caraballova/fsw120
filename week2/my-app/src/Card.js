import React from "react"

function Card(props) {
    let y = props.title
    let z = props.subTitle
    let a = props.info
    
    return (
        <div style={{backgroundColor:props.backgroundColor}}>
            <h1 style={{textAlign:"center"}}>{y}</h1>
            <h3 style={{textAlign:"center"}}>{z}</h3>
            <h3 style={{textAlign:"center"}}>{a}</h3>
        </div>
    )
}

Card.defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100
}

export default Card
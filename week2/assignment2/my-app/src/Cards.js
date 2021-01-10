import React from "react"

function Card (props) {
    let place = props.place
    let price = props.price
    let timeToGo = props.timeToGo   
    
        if (timeToGo === "Spring") {
            return (
            <div style={{backgroundColor: "blue", textAlign:"center"}}>
                <h1 style={{}}>{place}</h1>
                <h3 style={{}}>{price}</h3>
                <h3 style={{}}>{timeToGo}</h3>
            </div>
    )
            } else if (timeToGo === "Winter") {
            return (
            <div style={{backgroundColor: "red", textAlign:"center"}}>
                <h1 style={{}}>{place}</h1>
                <h3 style={{}}>{price}</h3>
                <h3 style={{}}>{timeToGo}</h3>
            </div>
    )
}       else if (timeToGo === "Fall") {
            return (
            <div style={{backgroundColor: "orange", textAlign:"center"}}>
                <h1 style={{}}>{place}</h1>
                <h3 style={{}}>{price}</h3>
                <h3 style={{}}>{timeToGo}</h3>
            </div>
    )
}       else {
            return (
            <div style={{backgroundColor: "green", textAlign:"center"}}>
                <h1 style={{}}>{place}</h1>
                <h3 style={{}}>{price}</h3>
                <h3 style={{}}>{timeToGo}</h3>
            </div>
        )
}
       /*  return (
            <div>
                {vacaSpots}
            </div>
    ) */
}

export default Card
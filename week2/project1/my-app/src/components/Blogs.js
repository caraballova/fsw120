import React from "react"

function Card(props) {
    let y = props.title
    let z = props.subTitle
    let a = props.author
    let x = props.date

    let arr = [

        {
    
            title: "Man must explore, and this is exploration at its greatest",
    
            subTitle: "Problems look mighty small from 150 miles up",
    
            author: "Start Bootstrap",
    
            date: "September 24, 2019"
    
        },{
    
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    
            subTitle: "",
    
            author: "Start Bootstrap",
    
            date: "September 18, 2019"
    
        },{
    
            title: "Science has not yet mastered prophecy",
    
            subTitle: "We predict too much for the next year and yet far too little for the next ten.",
    
            author: "Start Bootstrap",
    
            date: "August 24, 2019"
    
        },{
    
            title: "Failure is not an option",
    
            subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
    
            author: "Start Bootstrap",
    
            date: "July 8, 2019"
    
        }
    
    ]

    let v = arr.map(function(props){
        return (
            <div id="" style={{margin: "auto", width: "30%", padding: "10px"}}>
                <h1 style={{fontWeight: "bolder"}}>{props.title}</h1>

                <h2 style={{fontWeight: "lighter"}}>{props.subTitle}</h2>

                <span style={{color: "grey", fontStyle: "italic", paddingBottom: "30px"}}>Posted by <b style={{color: "black"}}>{props.author}</b> on {props.date}</span>

                <hr style={{color: "lightgray",width: "100%", textAlign: "center", marginLeft: "0"}}/>

            </div>
        )
    })
    
    return (
        <div id="container" style={{}}>
            {v}
            <button id="button" style={{fontWeight: "800", justifyContent: "center", backgroundColor: "#086A87", fontSize: "10px", color: "white", marginLeft: "850px", padding: "15px", width: "10%"}}>OLDER POSTS   &rarr;   </button>
            <div>
                <hr/>
            </div>
        </div>
    )
}

export default Card
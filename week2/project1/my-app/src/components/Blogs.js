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
            <div>
                <h1>{props.title}</h1>
                <h3>{props.subTitle}</h3>
                <span>Posted by <b>{props.author}</b> on {props.date}</span>
                <hr/>
            </div>
        )
    })
    
    return (
        <div>
            {v}
            <button></button>
            <div>
                <hr/>
            </div>
        </div>
    )
}

Card.defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100
}

export default Card
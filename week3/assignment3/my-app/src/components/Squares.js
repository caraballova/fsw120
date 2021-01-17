import React from "react"

function Squares (props) {
    return (
        <div id="squares" style={{display: "grid", gridTemplateColumns: "auto, auto", padding: "10px", margin: "auto", width: "45%"}}>
            <canvas id="box1" style={{backgroundColor: props.squares[0], gridColumn: "1/2", gridRow: "1/2", padding: "20px", border: "1px solid black"}}></canvas>
            <canvas id="box2" style={{backgroundColor: props.squares[1], gridColumn: "2/2", gridRow: "1/2", padding: "20px", border: "1px solid black"}}></canvas>
            <canvas id="box3" style={{backgroundColor: props.squares[2], gridColumn: "1/2", gridRow: "2/2", padding: "20px", border: "1px solid black"}}></canvas>
            <canvas id="box4" style={{backgroundColor: props.squares[3], gridColumn: "2/2", gridRow: "2/2", padding: "20px", border: "1px solid black"}}></canvas>
        </div>
    )
}

export default Squares;
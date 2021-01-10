import React from "react"

function Nav() {
    return (
        <div id="leftnav" style={{backgroundColor: "darkgray", paddingLeft: "300px", paddingTop: "10px"}}>
            <a href="" style={{textDecoration: "none", color: "white", fontWeight: "bolder"}}>Start Bootstrap</a>
            <div id="rightnav" style={{display: "inline", paddingLeft: "600px", paddingTop: "10px", wordSpacing: "15px"}}>
                <a href="" style={{textDecoration: "none", color: "white"}}>HOME   </a>
                <a href="" style={{textDecoration: "none", color: "white"}}>ABOUT   </a>
                <a href="" style={{textDecoration: "none", color: "white"}}>SAMPLE POST   </a>
                <a href="" style={{textDecoration: "none", color: "white"}}>CONTACT  </a>
            </div>
        </div>
        
    )
}

export default Nav
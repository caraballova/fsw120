import React from "react"
import BlogList from "./Bloglist"
import Nav from "./Nav"

function Header() {
    return (
        <div>
            <Nav />
            <BlogList />
        </div>
    )
}

export default Header
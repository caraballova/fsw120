import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Services from "./components/Services"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/services">
                    <Services/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default App
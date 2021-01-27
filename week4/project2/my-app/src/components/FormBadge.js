import React from "react"
import BadgeList from "./BadgeList"

class FormBadge extends React.Component {
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            tellUsAboutYourself: "",
            nameBadges: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newUserData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favoriteFood: this.state.favoriteFood,
            tellUsAboutYourself: this.state.tellUsAboutYourself
        }
        this.setState({nameBadges : [newUserData, ...this.state.nameBadges],
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        tellUsAboutYourself: ""
        })
    }

    render () {
        return (
            <div id = "info">
            <form onSubmit = {this.handleSubmit}>
                <input id ="fName1"
                    type = "text"
                    name= "firstName"
                    value = {this.state.firstName}
                    placeholder = "First Name"
                    onChange = {this.handleChange}
                    required = {true}
                /> 

                <input id = "lName1"
                    type = "text"
                    name = "lastName"
                    value = {this.state.lastName}
                    placeholder = "Last Name"
                    onChange = {this.handleChange}
                    required = {true}
                /> 

                <br />
                <br />

                <input id ="email1"
                    type = "text"
                    name = "email"
                    value = {this.state.email}
                    placeholder = "Email"
                    onChange = {this.handleChange}
                    required = {true}
                />
 
                <input id="placeOfBirth1"
                    type = "text"
                    name = "placeOfBirth"
                    value = {this.state.placeOfBirth}
                    placeholder = "Place of Birth"
                    onChange = {this.handleChange}
                />

                <br />
                <br />

                <input id ="phone1"
                    type = "number"
                    name = "phone"
                    value = {this.state.phone}
                    placeholder = "phone"
                    onChange = {this.handleChange}
                    required = {true}
                />
 
                <input id = "favfood1"
                    type = "text"
                    name = "favoriteFood"
                    value = {this.state.favoriteFood}
                    placeholder = "Favorite Food"
                    onChange = {this.handleChange}
                    required = {true}
                />

                <br />
                <br />

                <textarea id = "blah1"
                    type = "text"
                    name = "tellUsAboutYourself"
                    value = {this.state.tellUsAboutYourself}
                    placeholder = "Tell us about yourself"
                    onChange = {this.handleChange}
                    required = {true}
                />

                <br />

                <button id = "submit">Submit</button>

            
                </form>

                <BadgeList
                    nameBadges = {this.state.nameBadges}
                />

            </div>
        
        )

    }
}

export default FormBadge
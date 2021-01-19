import React from "react"
import BadgeCard from "./BadgeCard"

class BadgeList extends React.Component {
    
    

    render () {

    const mappedCards = this.props.nameBadges.map( (card, i) => {
        return (
            <BadgeCard
                key={i}
                firstName ={card.firstName}
                lastName = {card.lastName}
                email = {card.email}
                placeOfBirth = {card.placeOfBirth}
                phone = {card.phone}
                favoriteFood = {card.favoriteFood}
                tellUsAboutYourself = {card.tellUsAboutYourself}
            />
        )
    })

        return (
            <div>
             {mappedCards}
            </div>
        
        )
    }
}


export default BadgeList
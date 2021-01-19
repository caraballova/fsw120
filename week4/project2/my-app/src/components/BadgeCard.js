import React from "react"




const BadgeCard = ( { firstName, lastName, email, placeOfBirth, phone, favoriteFood, tellUsAboutYourself} ) => {
  return (
    <div id = "list">
        <h2 id = "badge">Badge</h2>
        <h4 id = "name">Name: {firstName} {lastName}</h4>
        <h4 id = "phone">Phone: {phone}</h4>
        <h4 class = "personal">Place of Birth: {placeOfBirth}</h4>
        <h4 id = "favFood">Favorite Food: {favoriteFood}</h4>
        <h4 class = "personal">Email: {email}</h4>
        <br />
        <h4 id = "yourself">{tellUsAboutYourself}</h4>
        

    </div>
  );
}

export default BadgeCard;
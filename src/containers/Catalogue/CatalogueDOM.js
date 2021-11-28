import React from "react";
import BirdCard from "components/CardItem/BirdCard";
import cockatiel from "Icons/Cockatiel.jpg";
import parakeet from "Icons/Large-parakeet.jpg";
import eclectus from "Icons/Eclectus.jpg";

export const createBirdCard = (bird) => {
    let image;
    if (bird.image.toString().toLocaleLowerCase().search("cockatiel") !== -1){
        image = cockatiel;
    } 
    else if (bird.image.toString().toLocaleLowerCase().search("parakeet") !== -1){
        image = parakeet;
    }
    else {
        image = eclectus;
    }
    return (
        <BirdCard key={bird.id}
                  image = {image}
                  title = {bird.name}
                  price = {bird.price}
                  id={bird.id}
        />
    )
}

export const getBirdCards = (birdList) => {
    return birdList.map(createBirdCard);
}
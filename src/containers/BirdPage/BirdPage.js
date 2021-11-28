import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { getBird } from 'API/API';
import { BirdPageStyled } from './BirdPage.styled';
import cockatiel from "Icons/Cockatiel.jpg";
import parakeet from "Icons/Large-parakeet.jpg";
import eclectus from "Icons/Eclectus.jpg";
import { Loader } from 'components/loader/Loader';


export const BirdPage = () => {
    const {birdId} = useParams();
    const [bird, setBird] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getBird(birdId).then(receivedBird => {
            console.log(receivedBird)
            setBird(receivedBird)
            setIsLoaded(true)
            })
    }, [birdId])
    if (bird === undefined) {
        return isLoaded ?  <h1> Not Found </h1> : <Loader />
    }

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
        <BirdPageStyled>
            <img src= {image} alt={bird.name}/>
            <div className="description">
                <h1>{bird.name}</h1>
                <h3>{bird.animalType}</h3>
                <ul>
                    <li>Age {bird.age} year(s)</li>
                    <li>Weight: {bird.mass} kg</li>
                    <li>Price:
                        { bird.price ? "$" + bird.price : " unknown"}
                    </li>
                </ul>
            </div>
        </BirdPageStyled>
    );
}
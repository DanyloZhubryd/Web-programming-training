import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { getBird } from 'API/API';
import { BirdPageStyled } from './BirdPage.styled';
import cockatiel from "Icons/Cockatiel.jpg";
import parakeet from "Icons/Large-parakeet.jpg";
import eclectus from "Icons/Eclectus.jpg";
import { Loader } from 'components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { addToCart, increaseAmount } from 'redux/actions/cartActions';
import { Button } from 'antd';


export const BirdPage = () => {
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    let dispatch = useDispatch();
    
    const {birdId} = useParams();
    const [bird, setBird] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getBird(birdId).then(receivedBird => {
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

    const handleAddToCart = () => {
        if (cartItems.some(item => item.id == birdId)) {
            dispatch(increaseAmount(birdId));
        } else {
            let item = bird;
            item.amount = 1;
            dispatch(addToCart(item));
        }
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
                <Button onClick={handleAddToCart}> To Cart <ShoppingCartOutlined/> </Button>
            </div>
        </BirdPageStyled>
    );
}
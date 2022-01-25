import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseAmount, decreaseAmount, removeFromCart } from "redux/actions/cartActions";
import { Buttons } from "./CartItem.styled";
import BirdCard from "components/CardItem/BirdCard";
import cockatiel from "Icons/Cockatiel.jpg";
import parakeet from "Icons/Large-parakeet.jpg";
import eclectus from "Icons/Eclectus.jpg";

export const CartItem = (props) => {
  let image;
    if (props.item.image.toString().toLocaleLowerCase().search("cockatiel") !== -1){
        image = cockatiel;
    } 
    else if (props.item.image.toString().toLocaleLowerCase().search("parakeet") !== -1){
        image = parakeet;
    }
    else {
        image = eclectus;
    }
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    let dispatch = useDispatch();
  
    const handleAmountIncrease = () => {
      dispatch(increaseAmount(props.item.id));
  }

  const handleAmountDecrease = () => {
      let item = cartItems.find((cartItem) => cartItem.id === props.item.id);
      if (item.amount === 1) {
          dispatch(removeFromCart(props.item.id));
      } else {
          dispatch(decreaseAmount(props.item.id));
      }
  }
    return (
      <BirdCard title={props.item.name}
      image={image}
      price={props.item.price}
      id={props.item.id}
      additional={
        <Buttons>
          <Button onClick={handleAmountDecrease}>-</Button>
          <p>{props.item.amount}</p>
          <Button onClick={handleAmountIncrease}>+</Button>
        </Buttons>}/>
    );
    }
import { Button, Image } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseAmount, decreaseAmount, removeFromCart } from "redux/actions/cartActions";
import { Buttons, CardWrapper } from "./CartItem.styled";


export const CartItem = (props) => {
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
      <CardWrapper>
        <Image src={props.item.image}/>
        <Buttons>
          <Button onClick={handleAmountIncrease}>+</Button>
          <Button onClick={handleAmountDecrease}>-</Button>
        </Buttons>
      </CardWrapper>
    );
    }
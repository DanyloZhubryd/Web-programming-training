import React from "react";
import { CartItem } from "./CartItem";
import { ItemsWrapper, Price } from "./CartItems.styled";
import { Empty } from "antd";
import { useSelector } from "react-redux";


const CartItems = () => {
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    
    const itemsList = cartItems.map((item) => (<CartItem item={item}/>));

    return (
        <div>
            {cartItems.length === 0 ? <Empty>Cart is empty</Empty> : 
            <div>
                <ItemsWrapper>{itemsList}</ItemsWrapper>
                <Price>
                    Total price: ${cartItems.reduce((sum, item) => {
                        return sum + parseInt(item.price)*item.amount;
                    }, 0)}
                </Price>
            </div>
            }
        </div>
    );
}

export default CartItems;
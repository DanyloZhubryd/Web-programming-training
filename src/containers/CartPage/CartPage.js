import { Button } from "antd";
import CartItems from "components/CartItems/CartItems";
import React from "react";
import { CartWrapper } from "./CartPage.styled";

export const CartPage = () => {
    return (
        <CartWrapper>
            <CartItems/>
        </CartWrapper>
    )
}
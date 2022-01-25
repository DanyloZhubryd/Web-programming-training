import React from "react";
import {Button} from "antd";
import { NavLink } from "react-router-dom";

const GoShopButton = () => (
    <NavLink exact to={`/catalogue`}>
        <Button size = "large" shape = "round" ghost>Go shop</Button>
    </NavLink>
)

export default GoShopButton;
import React from "react";
import {Button} from "antd";
import { NavLink } from "react-router-dom";

const LearnMoreButton = ({id}) => (
    <NavLink exact to={`/bird/${id}`}>
        <Button>Learn more</Button>
    </NavLink>
)

export default LearnMoreButton;
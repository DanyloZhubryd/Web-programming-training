import React from "react";
import { StyledHeader, IconsWrapper } from "./Layout.styles";
import {
  TwitterOutlined,
  SearchOutlined,
  InstagramOutlined,
  FacebookOutlined,
  DingtalkOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const Layout = () => (
  <StyledHeader title="Bird Shop">
    <div>
      <IconsWrapper>
        <DingtalkOutlined />
      </IconsWrapper>
      <p>Bird Shop</p>
    </div>
    <div>
      <IconsWrapper>
        <TwitterOutlined />

        <FacebookOutlined />

        <InstagramOutlined />
      </IconsWrapper>
    </div>
    <div>
      <IconsWrapper>
        <LoginOutlined />
      </IconsWrapper>
    </div>
  </StyledHeader>
);

export default Layout;
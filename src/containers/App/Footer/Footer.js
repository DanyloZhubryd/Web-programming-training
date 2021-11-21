import React from "react";
import { Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import {
    TwitterOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    DingtalkOutlined,
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconBase component={DingtalkOutlined} />
        <h1>Bird Shop</h1>
      </LogoWrapper>
      <p>Animals are such agreeable friends
      <br /> They ask no questions
      <br /> They pass no criticisms</p>
      <VerticalLine />
      <IconsWrapper>
          <IconBase component={YoutubeOutlined} color='#FF0000'/>
          <IconBase component={TwitterOutlined} color='#03A9F4' />
          <IconBase component={FacebookOutlined} color='#0000FF' />
          <IconBase component={InstagramOutlined} color='#C13584'/>
      </IconsWrapper>
      <VerticalLine />
      <StyledText>© Bird Shop all rights reserved</StyledText>
    </Wrapper>
  );
};

export default Footer;

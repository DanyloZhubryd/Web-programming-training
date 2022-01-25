import React from "react";
import ParrotPicture from "../../Icons/parrot.png";
import {
  SectionWrapper,
  StyledText,
} from "./Home.styled";

import GoShopButton from "components/GoShopButton/GoShopButton";
import { CardStorage } from "components/CardStorage/CardStorage";


const Home = () => {
  return (
    <div>
      <SectionWrapper>
        <StyledText>
          <h1>Make a new pet friend today!</h1>
          <p>
          With almost no effort at all, pets manage to bring so much joy into our lives. 
          They make us laugh, comfort us when we’re sick or upset, 
          and are always there for us no matter what. 
          It’s no wonder that an estimated 12 million British households choose to keep a pet.
          </p>
          <GoShopButton/>
        </StyledText>
        <img src={ParrotPicture} alt=""/>
      </SectionWrapper>
      <CardStorage birdNum={3} birdIncrement={3}/>
    </div>
  );
};

export default Home;
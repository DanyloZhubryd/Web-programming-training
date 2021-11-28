import React from "react";
import { Card } from "antd";
import { Footer } from "./BirdCard.styled";
import LearnMoreButton from "components/LearnMoreButton/LearnMoreButton"; 
import { descriptions } from "Descriptions/descriptions";
const { Meta } = Card;

const BirdCard = ({ title='No title.', image, price, id}) => {
  return (
  <Card
    hoverable
    style={{ width: 350, borderRadius: "20px" }}
    cover={
      <img style={{ borderRadius: "20px" }}  src={image} alt="example"/>
    }
  >
    <Meta title={title} description= {descriptions[id-1].text} />
    <Footer>
      <p>${price}</p>
      <LearnMoreButton id={id}/>
    </Footer>
  </Card>
  );
};

export default BirdCard;

import React from "react";
import ParrotPicture from "../../Icons/parrot.png";
import ImageParrot1 from "../../Icons/Large-parakeet.jpg";
import ImageParrot2 from "../../Icons/Cockatiel.jpg";
import ImageParrot3 from "../../Icons/Eclectus.jpg";
import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";

const data = [
  {
    title: "Large Parakeet",
    text: `Free-ranging “budgies” live in large flocks in a variety of habitats such as woodlands,
     open grassland, and dry scrub throughout non-coastal Australia and Tasmania`,
    image: ImageParrot1,
    price: 149,
  },
  {
    title: "Cockatiel",
    text:`Also known as weiro bird, or quarrion, 
    is a small parrot that is a member of its own branch of the cockatoo family endemic to Australia. 
    They are prized as household pets and companion parrots throughout the world 
    and are relatively easy to breed.`,
    image: ImageParrot2,
    price: 299,
  },
  {
    title: "Eclectus",
    text:
      `Eclectus are a friendly and docile type of parrot.
       They make especially great pets for people who like calm and pretty birds.`,
    image: ImageParrot3,
    price: 499,
  },
];

const Home = () => {
  return (
    <div>
      <SectionWrapper>
        <StyledText>
          <h1>Make a new per friend today!</h1>
          <p>
          With almost no effort at all, pets manage to bring so much joy into our lives. 
          They make us laugh, comfort us when we’re sick or upset, 
          and are always there for us no matter what. 
          It’s no wonder that an estimated 12 million British households choose to keep a pet.
          </p>
          <StyledButton size="large">Show More</StyledButton>
        </StyledText>
        <img src={ParrotPicture} alt=""/>
      </SectionWrapper>
      <CardWrapper>
        {data.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
    </div>
  );
};

export default Home;
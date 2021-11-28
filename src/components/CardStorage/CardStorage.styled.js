import styled from "styled-components";

export const CardStorageStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 3em 2em;
  width: 90%;
  min-height: 40vh;
  align-self: center;
  .showMoreButton{
    position:absolute;
    right:50%;
    width:20vw;
  }
`;
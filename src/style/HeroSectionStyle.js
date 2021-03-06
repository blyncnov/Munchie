import styled from "styled-components";
import Banner from "../assets/curly2.svg";

export const HeroSectionContainer = styled.div`
  padding: 2em 0;
  border-radius: 2px;
  background-color: transparent;
`;

export const HeroSectionRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ row }) => (row ? "row-reverse" : "row")};
  gap: 3em;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroSectionColumn = styled.div`
  width: 100%;
  max-width: 100%;
  flex-basis: 50%;
  background: url(${Banner});
  background-position: top, 20px;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-size: 1.9rem;
    color: #383762;
    font-family: "Cormorant Upright", serif;
  }

  span {
    background-color: #ff634730;
    padding: 0.1em;
    border-radius: 20%/70%;
  }

  p {
    font-size: 16px;
    margin: 1em 0;
    color: #333;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
  }

  button {
    border-radius: 3px;
    padding: 1em 1.8em;
    border: none;
    background-color: #383762;
    font-family: "Cormorant Upright", serif;
    font-weight: 600;
  }

  a {
    color: white;
    font-weight: 700;
    font-size: 16px;
    font-family: "Cormorant Upright", serif;
  }

  img {
    width: 100%;
    align-self: center;
    max-width: 100%;
  }

  div {
    position: relative;
    display: flex;
  }

  .stay {
    position: absolute;
    top: 10%;
    right: 30%;
  }

  @media (max-width: 760px) {
    p {
      font-size: 12px;
    }
  }
`;

export default HeroSectionContainer;

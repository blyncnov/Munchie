import styled from "styled-components";

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

  h1 {
    font-size: 1.9rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    margin: 1em 0;
    color: #333;
  }

  button {
    border-radius: 3px;
    padding: 1em 1.8em;
    border: none;
    background-color: black;
  }

  a {
    color: white;
    font-weight: 700;
    font-size: 1rem;
  }

  img {
    width: 100%;
    align-self: center;
    max-width: 100%;
  }
`;

export default HeroSectionContainer;

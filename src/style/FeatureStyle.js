import styled from "styled-components";
import Banner from "../assets/curly3.svg";

export const FeatureContainer = styled.div`
  width: 100%;
  padding: 2em 0;
  background: url(${Banner});
  background-position: top, 20px;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    text-align: center;
  }
`;

export const FeatureColumn = styled.div`
  width: 100%;
`;

export const FeatureRow = styled.div`
  width: 100%;
`;

export const FeatureBoxOneSummary = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const FeatureBoxTwoSummary = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const FeatureBoxOneCard = styled.div`
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  background-color: white;
  padding: 1.2em 1em;
  border-radius: 3px;
  gap: 1em;
  flex-basis: 33.3%;
  color: #383762;

  p {
    font-weight: 600;
    font-size: 14px;
    color: #383762;
  }

  @media (max-width: 760px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

export const FeatureBoxTwoCard = styled.div`
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  background-color: white;
  padding: 1.2em 1em;
  border-radius: 3px;
  gap: 1em;
  flex-basis: 33.3%;
  color: #383762;

  p {
    font-weight: 600;
    font-size: 14px;
    color: #383762;
  }

  @media (max-width: 760px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

export default FeatureContainer;

import styled from "styled-components";
import Bannertwo from "../assets/bannertwo.jpg";

export const HeaderContainer = styled.div`
  width: 100%;

  /* background-color: rgb(221, 255, 154); */
  background-color: #ebe7ffb9;
  background: url(${Bannertwo});
  background-position: top, 20px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default HeaderContainer;

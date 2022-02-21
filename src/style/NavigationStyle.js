import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 100%;
  /* background-color: rgb(221, 255, 154); */
  background-color: #ebe7ffb9;
`;

export const NavigationColumn = styled.div`
  width: 100%;
  padding: 0.5em 0;
  height: 70px;
  display: flex;
  align-items: center;
  /* background-color: #fff; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  @media (max-width: 760px) {
    height: 60px;
  }
`;

export const NavigationRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Navbar__logo {
    padding: 0.2em 0.5em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 4px;
    font-family: "Cormorant Upright", serif;
  }

  .Navbar__logo h1 {
    /* color: rgb(134 151 99); */
    color: #383762;
  }
`;

export const ItemBackground = styled.div`
  display: block;
  z-index: 999999999;

  @media (max-width: 760px) {
    display: fixed;
    position: absolute;
    top: 0;
    left: ${({ click }) => (click ? "-100%" : "0")};
    height: 100vh;
    width: 100%;
    background-color: transparent;
    transition: all 0.8s ease-in-out;
  }
`;

export const Items = styled.ul`
  display: flex;

  @media (max-width: 760px) {
    display: block;
    width: 50vw;
    height: 100%;
    background-color: #00030e;
    padding-left: 0.5em;
  }
`;

export const Lists = styled.li`
  padding-left: 1.5em;
  transition: all 0.4s ease-in-out;

  a {
    font-weight: 700;
    color: #797676;
    font-size: 1rem;
    line-height: 20px;
    letter-spacing: 1px;
    transition: all 0.4s ease-in-out;
    font-family: "Cormorant Upright", serif;
  }

  :hover {
    transform: scale(1.1);
  }

  a:hover {
    color: black;
    border-bottom: 1px solid green;
    transform: scale(1.2%);
  }

  @media (max-width: 760px) {
    margin: 2em 0;

    :hover {
      background-color: lighten(#00030e);
      padding: 0.4em;
      border-radius: 10px/90px;
      color: black !important;
    }

    a {
      color: white;
    }

    a:hover {
      color: white;
      border-bottom: none;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 99999;

  @media (max-width: 760px) {
    display: block;
  }
`;

export default NavigationContainer;

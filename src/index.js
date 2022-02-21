import React from "react";
import ReactDOM from "react-dom";

// import all styles
import "./GlobalStyle.css";

// import all Components
import App from "./App";

const Index = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

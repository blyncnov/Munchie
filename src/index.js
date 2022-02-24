import React from "react";
import ReactDOM from "react-dom";

// import all styles
import "./GlobalStyle.css";

// import all Components
import App from "./App";

// https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3

const Index = () => {
  // useEffect(() => {
  //   const PlayHandler = () => {};

  //   window.addEventListener("load", PlayHandler);

  //   return () => window.removeEventListener("load", PlayHandler);
  // }, []);

  return (
    <>
      <App />
      <audio loop id="backgroundMusic" controls autoPlay="true">
        <source
          src="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
          type="audio/mp3"
        />
      </audio>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

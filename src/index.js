import React, { useEffect } from "react";
import ReactDOM from "react-dom";

// import all styles
import "./GlobalStyle.css";

// import all Components
import App from "./App";

// https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3

const Index = () => {
  useEffect(() => {
    const PlayHandler = () => {
      const player = document.getElementById("backgroundMusic");
      console.log("player" + { player });
      player.play();
    };

    window.addEventListener("mousemove", PlayHandler);

    return () => window.removeEventListener("mousemove", PlayHandler);
  }, []);

  return (
    <>
      <App />
      <audio loop id="backgroundMusic" autoPlay>
        <source
          src="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
          type="audio/mp3"
        />
      </audio>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

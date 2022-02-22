import React from "react";
import Features from "./components/Features";

// import all Components
import Header from "./components/Header";

// import all styles

const App = () => {
  return (
    <>
      <Header />
      <div className="Constrainant">
        <Features />
      </div>
    </>
  );
};

export default App;

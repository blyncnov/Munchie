import React from "react";
import Features from "./components/Features";

// import all Components
import Header from "./components/Header";
import TableContent from "./components/TableContent";

// import all styles

const App = () => {
  return (
    <>
      <Header />
      <div className="Constrainant">
        <Features />
        <TableContent />
      </div>
    </>
  );
};

export default App;

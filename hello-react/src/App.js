import React from "react";

const App = () => {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return <div style={style}>{name}</div>;
};

export default App;

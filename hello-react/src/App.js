import React from "react";

const App = () => {
  const name = "react";
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16,
      }}
    >
      {name}
    </div>
  );
};

export default App;

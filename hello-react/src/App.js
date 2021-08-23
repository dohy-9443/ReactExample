import React from "react";

const App = () => {
  const name = "리웩트";
  return (
    <div>
      <h1>지금 name 값은 : {name}</h1>
      <div>{name === "리액트" ? <h1>리액트입니다.</h1> : null}</div>
    </div>
  );
};

export default App;

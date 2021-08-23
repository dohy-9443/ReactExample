import React from "react";

const App = () => {
  const name = "리웩트";
  return (
    <div>
      <h1>지금 name은 : {name}</h1>
      {name === "리액트" ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );
};

export default App;

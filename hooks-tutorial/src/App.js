import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Counter />
      <br />

      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
        <br />
        <br />
        {visible && <Info />}
      </div>
      <br />
      <Average />
    </div>
  );
};

export default App;

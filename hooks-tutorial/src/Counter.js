import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div
      style={{
        border: "5px solid #C9BA9B",
        background: "#BDC2BB",
        padding: "2rem",
      }}
    >
      <p style={{ textAlign: "center", color: "white" }}>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setValue(value + 1)}>+1</button>
        &nbsp;&nbsp;
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
    </div>
  );
};

export default Counter;

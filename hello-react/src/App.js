import React from "react";
import "./App.css";

const App = () => {
  const name = "react";
  return (
    <>
      {/* 주석은 이케 씀 */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하면
        // 요거도 됨
      >
        {name}
      </div>
      // 근데 이건 안됨ㅋㅋ <br />
      /* 요거도 안됨ㅋㅋ */
      <br />
      <input />
    </>
  );
};

export default App;

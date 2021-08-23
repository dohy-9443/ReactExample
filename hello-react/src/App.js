import React from 'react';
import './App.css';

const App = () => {
  const name = 'react';
  return (
    <>
      {/* 주석은 이케 씀 */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하면
        // 요거도 됨
      >
        {name}
      </div>
      <input />
    </>
  );
};

export default App;

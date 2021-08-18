import React from 'react';
import './App.css';

const App = () => {
  const name = '리액트';
  return (
    <div className="react">
      {name}
      {/* 리액트 주석 */}
      /* 이렇게 적으면 다 나옴 */ // 이것도 나옴
    </div>
  );
};

export default App;

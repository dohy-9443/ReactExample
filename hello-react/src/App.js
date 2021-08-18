import React from 'react';

const App = () => {
  const name = '리웩트';
  return (
    <>
      <h1>잘 작동하니</h1>
      <h2>어 잘 작동해</h2>
      <h3>나는 {name} 이야</h3>
      {name === '리액트' ? <h4>리액트입니다.</h4> : <h4>리액트가 아닙니다.</h4>}
    </>
  );
};

export default App;

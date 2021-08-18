import React from 'react';

const App = () => {
  const name = '리액트';
  const style = {
    backgroundColor: 'gray',
    color: 'cyan',
    fontSize: '2rem',
    fontWight: 'bold',
    padding: 16,
  };
  return <div style={style}>{name}</div>;
};

export default App;

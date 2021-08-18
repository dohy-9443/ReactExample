import React from 'react';

const App = () => {
  const name = '리액트';
  return (
    <div
      style={{
        backgroundColor: 'gray',
        color: 'cyan',
        fontSize: '2rem',
        fontWight: 'bold',
        padding: 16,
      }}
    >
      {name}
    </div>
  );
};

export default App;

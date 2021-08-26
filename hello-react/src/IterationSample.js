import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, index) => (
    <li key={index} style={{ color: 'white', fontSize: '1rem' }}>
      {name}
    </li>
  ));
  return (
    <div
      style={{
        border: '5px solid #ecc7co',
        background: '#fdae84',
        padding: '2rem',
      }}
    >
      <ul style={{ textAlign: 'center' }}>{nameList}</ul>
    </div>
  );
};

export default IterationSample;

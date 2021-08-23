import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  return (
    <div
      style={{
        border: '5px solid #AFC4E7',
        background: '#EEAFAF',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          color: 'white',
        }}
      >
        {message}
      </h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>입장</button>
    </div>
  );
};

export default Say;

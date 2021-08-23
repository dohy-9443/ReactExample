import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('white');

  return (
    <div
      style={{
        border: '5px solid #AFC4E7',
        background: '#EEAFAF',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color }}>{message || '안녕?'}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>입장</button>

      <div>
        <br />
        <button
          style={{ color: '#BAE7AF' }}
          onClick={() => setColor('#BAE7AF')}
        >
          초록색
        </button>
        <button
          style={{ color: '#CFC3B5' }}
          onClick={() => setColor('#CFC3B5')}
        >
          고동색
        </button>
        <button
          style={{ color: '#FDC4F8' }}
          onClick={() => setColor('#FDC4F8')}
        >
          핑크색
        </button>
      </div>
    </div>
  );
};

export default Say;

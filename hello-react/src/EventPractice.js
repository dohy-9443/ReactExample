import React, { useState } from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div
      style={{
        border: '5px solid #CB9FFD',
        background: '#BEEBFD',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: 'white' }}>이벤트 연습</h1>
      <h1 style={{ color: 'white' }}>{username + ': ' + message}</h1>
      <br />
      <input
        style={{
          padding: '1rem',
          background: '#83a7a3',
          color: '#BEEBFD',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        type="text"
        name="username"
        placeholder="사용자명을 입력하세요."
        value={username}
        onChange={onChangeUsername}
      />
      &nbsp;&nbsp;
      <input
        style={{
          padding: '1rem',
          background: '#83a7a3',
          color: '#BEEBFD',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <br />
      <br />
      <button style={{ padding: '1rem 2rem' }} onClick={onClick}>
        확인
      </button>
    </div>
  );
};

export default EventPractice;

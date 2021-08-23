import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
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
          name="message"
          placeholder="아무거나 입력해 보세요."
          onChange={(e) => {
            console.log(e);
          }}
        />
      </div>
    );
  }
}

export default EventPractice;

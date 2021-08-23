import React, { Component } from 'react';

class EventPractice extends Component {
  state = { message: '' };
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
        <h1 style={{ color: 'white' }}>
          {this.state.message || '내용을 입력해보세요.'}
        </h1>

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
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <button
          style={{ padding: '1rem 2rem' }}
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;

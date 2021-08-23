import React, { Component } from 'react';

class EventPractice extends Component {
  state = { username: '', message: '' };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

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
          {this.state.username + ': ' + this.state.message}
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
          name="username"
          placeholder="사용자명을 입력하세요."
          value={this.state.username}
          onChange={this.handleChange}
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
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button style={{ padding: '1rem 2rem' }} onClick={this.handleClick}>
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초기값 설정하기
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div
        style={{
          border: '5px solid coral',
          background: 'teal',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white' }}>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;

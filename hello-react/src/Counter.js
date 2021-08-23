import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초기값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
      increase: 0,
      decrease: 0,
    };
  }

  render() {
    const { number, fixedNumber, increase, decrease } = this.state;
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
        <h2 style={{ color: 'coral' }}>바뀌지 않는 값: {fixedNumber}</h2>
        <h2 style={{ color: 'skyblue' }}>더하기만 되는 값: {increase}</h2>
        <h2 style={{ color: 'yellowgreen' }}>빼기만 되는 값: {decrease}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1, increase: increase + 1 });
          }}
        >
          +1
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => {
            this.setState({ number: number - 1, decrease: decrease - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;

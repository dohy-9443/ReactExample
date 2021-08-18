import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}: 바뀌지 않는 값</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
          disabled={number === 10 ? true : false}
        >
          +1
        </button>

        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
          disabled={number === -10 ? true : false}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;

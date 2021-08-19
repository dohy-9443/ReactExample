import React, { Component } from 'react';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <>
        <Counter />
        <br />
        <Say />
        <br />
        <EventPractice />
        <br />
        <ValidationSample />
        <br />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <br />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </>
    );
  }
}

export default App;

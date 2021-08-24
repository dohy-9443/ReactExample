import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" favoriteNumber={3}>
          리액트
        </MyComponent>
        <br />
        <Counter />
        <br />
        <Say />
        <br />
        <EventPractice />
        <br />
        <ValidationSample />
        <br />
        <div
          style={{
            border: '5px solid #C9BA9B',
            background: '#BDC2BB',
            padding: '2rem',
          }}
        >
          <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
          <button onClick={() => this.scrollBox.scrollToBottom()}>
            맨 밑으로
          </button>
        </div>
      </div>
    );
  }
}

export default App;

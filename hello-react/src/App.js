import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
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
        <br />
        <IterationSample />
        <br />
        <div
          style={{
            border: '5px solid #d18063',
            background: '#f9d9ca',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <button onClick={this.handleClick}>랜덤 색상</button>
          <ErrorBoundary>
            <LifeCycleSample color={this.state.color} />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;

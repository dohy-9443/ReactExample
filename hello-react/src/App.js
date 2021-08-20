import React, { Component } from 'react';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';

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
        <br />
        <br />
        <IterationSample />
        <br />
        <br />
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <br />
          <LifeCycleSample color={this.state.color} />
        </div>
      </>
    );
  }
}

export default App;

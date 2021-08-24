import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;

    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: 300,
      width: 300,
      overflow: 'auto',
      position: 'relative',
      margin: 'auto',
    };

    const innerStyle = {
      width: '100%',
      height: 650,
      background: 'linear-gradient(white, black)',
    };

    return (
      <div>
        <div
          style={style}
          ref={(ref) => {
            this.box = ref;
          }}
        >
          <div style={innerStyle} />
        </div>
      </div>
    );
  }
}

export default ScrollBox;

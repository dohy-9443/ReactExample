import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div
        style={{
          border: '5px solid aqua',
          padding: '2rem',
          background: 'black',
          color: 'white',
        }}
      >
        <div>나의 새롭고 멋진 컴포넌트</div>
        <br />
        <div>안녕하세요, 제 이름은 {name}입니다.</div>
        <br />
        <div>children 값은 {children}입니다.</div>
        <br />
        <div>제가 좋아하는 숫자는 {favoriteNumber}입니다.</div>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;

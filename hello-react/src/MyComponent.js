import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      내 이름은 {props.name} 입니다.<br/>
      children 값은 {props.children}입니다.
    </div>
  )
};

MyComponent.defaultProps = {
  name: '기본 이름'
};

export default MyComponent;
import React from 'react';

const MyComponent = (props) => {
  const {name, children} = props;
  return (
    <div>
      내 이름은 {name} 입니다.<br/>
      children 값은 {children}입니다.
    </div>
  )
};

MyComponent.defaultProps = {
  name: '기본 이름'
};

export default MyComponent;
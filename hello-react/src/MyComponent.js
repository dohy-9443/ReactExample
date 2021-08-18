import React from 'react';

const MyComponent = ({name, children}) => {
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
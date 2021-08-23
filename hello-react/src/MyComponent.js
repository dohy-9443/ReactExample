import React from 'react';

const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <>
      <div>나의 새롭고 멋진 컴포넌트</div>
      <br />
      <div>안녕하세요, 제 이름은 {name}입니다.</div>
      <br />
      <div>children 값은 {children}입니다.</div>
    </>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;

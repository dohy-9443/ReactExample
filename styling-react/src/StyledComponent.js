import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flx;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justifty-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
`;

const StyledComponent = () => {
  return <div></div>;
};

export default StyledComponent;

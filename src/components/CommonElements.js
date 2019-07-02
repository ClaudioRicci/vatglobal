import React from "react";
import styled from "styled-components";

const textAlign = "center";
const fontColor = "#000";

const StyledContainer = styled.div`
  border: 0.4rem #000 solid;
  color: ${fontColor};
  font: 900 1em/2rem Arial, Helvetica, sans-serif;
  padding: 1rem;
  text-align: ${textAlign};
`;

export const Container = props => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export const HeaderOne = styled.h1`
  font: 900 2em/2rem Arial, Helvetica, sans-serif;
`;

export const HeaderTwo = styled.h2`
  font: 900 1.6em/2rem Arial, Helvetica, sans-serif;
`;
export const HeaderThree = styled.h3`
  font: 900 1.4em/2rem Arial, Helvetica, sans-serif;
  line-height: 3rem;
`;
export const Button = styled.button`
  background: #3aa03a;
  border: 0.1rem #000 solid;
  border-radius: 1rem;
  color: ${fontColor};
  display: block;
  font: 900 1.4em/2rem Arial, Helvetica, sans-serif;
  margin: 0 auto 2rem;
  outline: none;
  padding: 1rem;
  :hover {
    border: 0.1rem #f9b600 solid;
    color: #fff;
  }
`;

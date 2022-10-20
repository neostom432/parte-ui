import React from 'react';
import styled from 'styled-components';

export function Button() {
  return (
    <RootWrapperButtonBasicM>
      <Base>
        <Label>Button</Label>
      </Base>
    </RootWrapperButtonBasicM>
  );
}

const RootWrapperButtonBasicM = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  flex: none;
  box-sizing: border-box;
`;

const Base = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 8px;
  border-radius: 2px;
  background-color: blue;
  box-sizing: border-box;
  padding: 6px 16px;
`;

const Label = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: 'Goldman Sans', sans-serif;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
`;

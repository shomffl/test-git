import React from 'react';
import styled from 'styled-components';

export const Input = (props) => {
    const {type = "text" ,placeholder = ""} = props;
  return <SInput type={type} placeholder={placeholder}/>;
};

const SInput = styled.input`
    padding: 8px 16px;
    margin-bottom: 10px;
    border: solid #ddd 1px;
    border-radius:0px;
    outline: none;
    width: 15vw;
`
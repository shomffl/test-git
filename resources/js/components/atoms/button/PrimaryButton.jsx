import React from 'react';
import styled from "styled-components";
import { BaseButton } from './BaseButton';

export const PrimaryButton = (props) => {
    const {children, onClickEvent} = props;
    return <SButton onClick={onClickEvent}>{children}</SButton>
}

const SButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0.1);
  filter: drop-shadow(5px 3px 1px #959595);
  font-size: 2vw;
   &:active {
  filter: none;
}
`
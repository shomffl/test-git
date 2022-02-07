import React from 'react';
import styled from "styled-components";
import { BaseButton } from './BaseButton';

export const PrimaryButton = (props) => {
    const {children} = props;
    return <SButton>{children}</SButton>
}

const SButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0.5);

`
import React from "react";
import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 30px;
  border: 2px solid;
  border-color: #fff;
  &:hover {
      cursor: pointer;
      transform: translateY(-0.1rem);
      opacity: 0.8;
  }
`
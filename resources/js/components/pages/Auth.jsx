import React from "react";
import styled from "styled-components";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
import backgroundImage from "../image/sky.jpg";

const Auth = () => {
    
    return (
        <SBackground>
            
            <PrimaryButton>start</PrimaryButton>
        </SBackground>
        )
}

export default Auth;

const SBackground = styled.div`
    background-image: linear-gradient(
      to right bottom,
      rgba(119, 207, 242, 0.9),
      rgba(189, 227, 242, 0.5)
    ),url(${backgroundImage});
    background-color: blue;
    height: 100vh;
    background-size: cover;
`
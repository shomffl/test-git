import React from "react";
import backgroundImage from "../../image/sky.jpg";
import styled from "styled-components";

export const Background = (props) => {
    const {children} = props;
    return (
        <SBackground>
            {children}
        </SBackground>
        )
    
}

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
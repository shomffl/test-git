import React from "react";
import styled from "styled-components";
import {Background} from "../atoms/background/Background";

export const DefaultLayout = (props) => {
    const {children} = props;
    return (
        <SBackground>
            <SBorderLine>
                <SContentWrapper>
                    {children}
                </SContentWrapper>    
            </SBorderLine>
        </SBackground>
        )
}

const SBackground = styled(Background)`
    position: relative;
    top: 10%;
`

const SBorderLine = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.1);
    height: 90vh;
    width: 90vw;
    border: 2px solid white;
`

const SContentWrapper = styled.div`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -0%);
`
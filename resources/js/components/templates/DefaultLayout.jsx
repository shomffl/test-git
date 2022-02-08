import React from "react";
import styled from "styled-components";
import {Background} from "../atoms/background/Background";
import title1 from "../image/title1.png";
import title2 from "../image/title2.png";

export const DefaultLayout = (props) => {
    const {children} = props;
    return (
        <SBackground>
            <SBorderLine>
                <SImagePosition>
                    <img src={title1} style={{width:"40vw", transform:"translate(-30%, 0)"}}/>
                    <img src={title2} style={{width:"25vw", transform:"translate(30%, 0)"}}/>
                </SImagePosition>
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

const SImagePosition = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75%;
`

const SBorderLine = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.1);
    height: 85vh;
    width: 90vw;
    border: 2px solid white;
`

const SContentWrapper = styled.div`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -0%);
`
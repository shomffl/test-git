import React from "react";
import {Input} from "../atoms/input/Input";
import styled from "styled-components";

export const TextInput = (props) => {
    const {text, type, placeholder} = props;
    return (
        <SContentWrapper>
            <p style={{ margin: "5px"}}>{text}</p>
            <Input type={type} placeholder={placeholder}/>
        </SContentWrapper>
        )
}

const SContentWrapper = styled.div`
    text-align: center;
`
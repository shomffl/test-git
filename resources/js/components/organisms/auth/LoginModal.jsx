import React, {useState} from "react";
import {ButtonModal} from "../../molecules/ButtonModal";
import {Input} from "../../atoms/input/Input";
import {TextInput} from "../../molecules/TextInput";
import styled from "styled-components";

export const LoginModal = (props) => {
    const {isOpen} = props;

    return(
        <SButtonModal isOpen={isOpen} text={"LOGIN"}>
            
            <TextInput type={"email"} text={"EMAIL ADRESS"} placeholder={"example@gmail.lc"} />
        </SButtonModal>
        )
}

const SButtonModal = styled(ButtonModal)`
    align-items: center;

`

const SInputContainer = styled.div`
    display:flex;
    flex-direction: column;
` 
import React, {useState} from "react";
import {ButtonModal} from "../../molecules/ButtonModal";
import {Input} from "../../atoms/input/Input";
import {TextInput} from "../../molecules/TextInput";
import styled from "styled-components";

export const LoginModal = (props) => {
    const {isOpen,setIsOpen} = props;

    return(
        <SButtonModal isOpen={isOpen} text={"SEND"} setIsOpen={setIsOpen}>
            <TextInput type={"email"} text={"EMAIL ADRESS"} placeholder={"example@gmail.lc"} />
            <TextInput type={"password"} text={"PASSWORD"} placeholder={"password"} />
        </SButtonModal>
        )
}

const SButtonModal = styled(ButtonModal)`
    align-items: center;

`
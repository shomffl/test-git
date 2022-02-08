import React, {useState} from "react";
import {ButtonModal} from "../../molecules/ButtonModal";
import {Input} from "../../atoms/input/Input";
import {TextInput} from "../../molecules/TextInput";
import styled from "styled-components";

export const RegisterModal = (props) => {
    const {isOpen,setIsOpen} = props;

    return(
        <ButtonModal isOpen={isOpen} text={"SEND"} setIsOpen={setIsOpen} sizeHeight={"20vh"} sizeWidth={"37vw"}>
            <h2>Register</h2>
            <TextInput type={"text"} text={"USER NAME"} placeholder={"your name"} />
            <TextInput type={"email"} text={"EMAIL ADRESS"} placeholder={"example@gmail.lc"} />
            <TextInput type={"password"} text={"PASSWORD"} placeholder={"password"} />
        </ButtonModal>
        )
}
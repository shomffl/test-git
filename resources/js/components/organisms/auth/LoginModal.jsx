import React, {useState} from "react";
import {ButtonModal} from "../../molecules/ButtonModal";
import {Input} from "../../atoms/input/Input";
import {TextInput} from "../../molecules/TextInput";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export const LoginModal = (props) => {
    const {isOpen,setIsOpen, onClickChangeAuth} = props;
    const navigate = useNavigate();
    
    const onClickLogin = () => {
        navigate("/select");
    }

    return(
        <ButtonModal isOpen={isOpen} text={"SEND"} setIsOpen={setIsOpen} sizeHeight={"20vh"} sizeWidth={"37vw"} 
        onClickEvent={onClickLogin} onClickText={onClickChangeAuth} linkText={"Change the authentication mode"}>
            <h2 style={{color:"white"}}>LOGIN</h2>
            <TextInput type={"email"} text={"EMAIL ADRESS"} placeholder={"example@gmail.lc"} />
            <TextInput type={"password"} text={"PASSWORD"} placeholder={"password"} />
        </ButtonModal>
        )
}
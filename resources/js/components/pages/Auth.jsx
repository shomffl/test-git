import React, {useState} from "react";
import styled from "styled-components";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
import {Background} from "../atoms/background/Background";
import {LoginModal} from "../organisms/auth/LoginModal";
import {RegisterModal} from "../organisms/auth/RegisterModal";

const Auth = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Background>
            <button onClick={()=>setIsOpen(!isOpen)}>open</button>
            <RegisterModal isOpen={isOpen} setIsOpen={setIsOpen}></RegisterModal>
        </Background>
        )
}

export default Auth;

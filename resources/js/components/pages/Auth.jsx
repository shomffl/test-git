import React, {useState} from "react";
import styled from "styled-components";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
import {Background} from "../atoms/background/Background";
import {LoginModal} from "../organisms/auth/LoginModal";

const Auth = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Background>
            <button onClick={()=>setIsOpen(!isOpen)}>open</button>
            <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}></LoginModal>
        </Background>
        )
}

export default Auth;

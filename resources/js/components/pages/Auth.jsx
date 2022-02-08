import React, {useState} from "react";
import styled from "styled-components";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
import {Background} from "../atoms/background/Background";
import {LoginModal} from "../organisms/auth/LoginModal";
import {RegisterModal} from "../organisms/auth/RegisterModal";
import {DefaultLayout} from "../templates/DefaultLayout";

const Auth = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <DefaultLayout>
            <PrimaryButton onClick={()=>setIsOpen(!isOpen)}>始める</PrimaryButton>
            <RegisterModal isOpen={isOpen} setIsOpen={setIsOpen}></RegisterModal>
        </DefaultLayout>
        )
}

export default Auth;

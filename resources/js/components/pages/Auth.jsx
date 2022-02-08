import React, {useState} from "react";
import styled from "styled-components";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
import {LoginModal} from "../organisms/auth/LoginModal";
import {RegisterModal} from "../organisms/auth/RegisterModal";
import {DefaultLayout} from "../templates/DefaultLayout";


const Auth = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [changeAuth, setChangeAuth] = useState(true);
    const onClickOpenModal = () => {
        setIsOpen(!isOpen);
    }
    const onClickChangeAuth = () => {
        setChangeAuth(!changeAuth);
    }

    return (
        <DefaultLayout>
            <PrimaryButton onClickEvent={onClickOpenModal}>始める</PrimaryButton>
            {changeAuth ? (
            <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} onClickChangeAuth={onClickChangeAuth}/>
            ) : (
            <RegisterModal isOpen={isOpen} setIsOpen={setIsOpen} onClickChangeAuth={onClickChangeAuth}/>
            )}
        </DefaultLayout>
        )
}

export default Auth;


import React, {useState} from "react";
import styled from "styled-components";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
import backgroundImage from "../image/sky.jpg";
import {Input} from "../atoms/input/Input";
import {ButtonModal} from "../molecules/ButtonModal";
import Modal from "react-modal";

const Auth = () => {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
        <SBackground>
            
            <PrimaryButton>start</PrimaryButton>
            <Input placeholder={"test"}/>
            <button onClick={()=>setIsOpen(!isOpen)}>open</button>
            <ButtonModal isOpen={isOpen}>test</ButtonModal>
        </SBackground>
        )
}

export default Auth;

const SBackground = styled.div`
    background-image: linear-gradient(
      to right bottom,
      rgba(119, 207, 242, 0.9),
      rgba(189, 227, 242, 0.5)
    ),url(${backgroundImage});
    background-color: blue;
    height: 100vh;
    background-size: cover;
`
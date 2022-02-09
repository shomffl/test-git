import React, {useState} from "react";
import {ButtonModal} from "../../molecules/ButtonModal";
import {Input} from "../../atoms/input/Input";
import {TextInput} from "../../molecules/TextInput";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export const RegisterModal = (props) => {
    const {isOpen,setIsOpen, onClickChangeAuth} = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onClickRegister = () => {
        navigate("/select");
    }
 
    
    return(
        <ButtonModal isOpen={isOpen} text={"SEND"} setIsOpen={setIsOpen} sizeHeight={"17vh"} sizeWidth={"37vw"} 
        onClickEvent={onClickRegister} onClickText={onClickChangeAuth} linkText={"Change the authentication mode"}>
            <h2 style={{color:"white"}}>REGISTER</h2>
            <TextInput type={"text"} text={"USER NAME"} placeholder={"your name"} onChange={(e) => setName(e.target.value)}/>
            <TextInput type={"email"} text={"EMAIL ADRESS"} placeholder={"example@gmail.lc"} onChange={(e) => setEmail(e.target.value)}/>
            <TextInput type={"password"} text={"PASSWORD"} placeholder={"password"} onChange={(e) => setPassword(e.target.value)}/>
        </ButtonModal>
        )
}
import React, {useState, useContext} from "react";
import {ButtonModal} from "../../molecules/ButtonModal";
import {Input} from "../../atoms/input/Input";
import {TextInput} from "../../molecules/TextInput";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {userInfoContext} from "../../../provider/UserInfoProvider";
import {setUserInfoContext} from "../../../provider/UserInfoProvider"

export const LoginModal = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isOpen,setIsOpen, onClickChangeAuth} = props;
    const navigate = useNavigate();
    const userInfo = useContext(userInfoContext);
    const setUserInfo = useContext(setUserInfoContext);
    
    const onClickLogin = (e) => {
        e.preventDefault();
        const data = {
            "email": email,
            "password": password
        }
        axios.post("api/login", data).then((res) => {
            if (res.data.error_judgement == "true"){
                console.log("is error");
            } else {
                console.log("all collect");
                console.log("user id",res.data.user_id);
                setUserInfo(res.data.user_id);
                navigate("/select");
            }
        });
    }
    console.log("provider",userInfo)
    

    return(
        <ButtonModal isOpen={isOpen} text={"SEND"} setIsOpen={setIsOpen} sizeHeight={"23vh"} sizeWidth={"37vw"} 
        onClickEvent={onClickLogin} onClickText={onClickChangeAuth} linkText={"Change the authentication mode"}>
            <h2 style={{color:"white"}}>LOGIN</h2>
            <TextInput type={"email"} text={"EMAIL ADRESS"} placeholder={"example@gmail.com"} onChange={(e) => setEmail(e.target.value)}/>
            <TextInput type={"password"} text={"PASSWORD"} placeholder={"password"} onChange={(e) => setPassword(e.target.value)}/>
        </ButtonModal>
        )
}
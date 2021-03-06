import React from "react";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
import {BaseModal} from "../atoms/modal/BaseModal";
import styled from "styled-components";
import {Input} from "../atoms/input/Input";
import {LinkText} from "../atoms/link/LinkText";

export const ButtonModal = (props) => {
    const {children, text, isOpen, setIsOpen, sizeHeight, sizeWidth, onClickEvent, onClickText, linkText} = props;
    
    return (
            <BaseModal isOpen={isOpen} setIsOpen={setIsOpen} sizeHeight={sizeHeight} sizeWidth={sizeWidth}>
                <SContainer>
                    {children}
                    <br/>
                    <PrimaryButton onClickEvent={onClickEvent}>{text}</PrimaryButton>
                    <LinkText onClickText={onClickText} linkText={linkText}/>
                </SContainer>
            </BaseModal>
        )    
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`

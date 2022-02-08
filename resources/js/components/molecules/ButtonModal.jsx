import React from "react";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
import {BaseModal} from "../atoms/modal/BaseModal";
import styled from "styled-components";
import {Input} from "../atoms/input/Input";


export const ButtonModal = (props) => {
    const {children, text, isOpen} = props;

    return (
            <BaseModal isOpen={isOpen}>
                <SContentWrapper>
                    {children}
                </SContentWrapper>
                <SButtonWrapper>
                    <PrimaryButton>{text}</PrimaryButton>
                </SButtonWrapper>
            </BaseModal>
        )    
}

const SContentWrapper = styled.div`
    text-align: center;
    display: inline-block;
    
`

const SButtonWrapper = styled.div`
    text-align: center;
    position: relative;
    top: 85%;
`;

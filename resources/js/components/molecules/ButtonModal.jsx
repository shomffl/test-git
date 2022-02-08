import React from "react";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
import {BaseModal} from "../atoms/modal/BaseModal";
import styled from "styled-components";


export const ButtonModal = (props) => {
    const {children, isOpen} = props;

    return (
            <BaseModal isOpen={isOpen}>
                <SButtonWrapper>
                    <PrimaryButton>{children}</PrimaryButton>
                </SButtonWrapper>
            </BaseModal>
        )    
}


const SButtonWrapper = styled.div`
    text-align: center;
    position: relative;
    top: 85%;
`;

import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");


export const BaseModal = (props) => {
    const {children, isOpen, setIsOpen, sizeHeight, sizeWidth} = props;
    
    
    const modalStyle = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.85)"
      },
      content: {
        position: "absolute",
        top: sizeHeight,
        left: sizeWidth,
        right: sizeWidth,
        bottom: sizeHeight,
        backgroundColor: "#85C8F2",
        borderRadius: "1vw",
        border: "none",
      }
    };
    return (
            <Modal isOpen={isOpen} style={modalStyle} onRequestClose={() => setIsOpen(false)}>{children}</Modal>
        )
}


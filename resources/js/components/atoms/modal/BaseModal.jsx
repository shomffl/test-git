import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.85)"
  },
  content: {
    backgroundColor: "#85C8F2",
    borderRadius: "1vw",
    border: "none",
    
  }
};

export const BaseModal = (props) => {
    const {children, isOpen} = props;
    return (
            <Modal isOpen={isOpen} style={modalStyle}>{children}</Modal>
        )
}


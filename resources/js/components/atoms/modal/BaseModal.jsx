import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.85)"
  },
  content: {
    position: "absolute",
    top: "10rem",
    left: "30rem",
    right: "30rem",
    bottom: "10rem",
    backgroundColor: "#85C8F2",
    borderRadius: "1vw",
    border: "none",
  }
};

export const BaseModal = (props) => {
    const {children, isOpen, setIsOpen} = props;
    return (
            <Modal isOpen={isOpen} style={modalStyle} onRequestClose={() => setIsOpen(false)}>{children}</Modal>
        )
}


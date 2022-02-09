import React from "react";
import styled from "styled-components";

export const LinkText = (props) => {
    const {onClickText, linkText} = props;
    return (
        <p onClick={onClickText}>{linkText}</p>
        )
}
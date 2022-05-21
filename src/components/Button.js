import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../styles/Styled";

export default function Button({children, handleClick, color,background, backgroundColor,borderRadius}) {
    return (<StyledButton onClick={handleClick} color={color} background={background} backgroundColor={backgroundColor} borderRadius={borderRadius}>
        {children}
    </StyledButton>);
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.number,
    handleClick: PropTypes.func,
    height: PropTypes.string,
    background: PropTypes.string
};



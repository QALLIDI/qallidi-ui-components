import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../styles/Styled";

export default function Button({children, handleClick, color,background, backgroundColor,borderRadius}) {
    return (<StyledButton onClick={handleClick} color={color} background={background} backgroundColor={backgroundColor} borderRadius={borderRadius}>
        {children}
    </StyledButton>);
}
/**
 * propTypes definition
 */
Button.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.number,
    handleClick: PropTypes.func,
    height: PropTypes.string,
    background: PropTypes.string
};



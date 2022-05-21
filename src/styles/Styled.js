import styled from 'styled-components'

export const StyledButton = styled.button`
background: ${props => props.background ? props.background : "transparent"};
background-color: ${props => props.backgroundColor ? props.backgroundColor : "#398AB9"};
border-radius: ${props => props.borderRadius ? props.borderRadius+"px" : "4px"};
border: 1px solid #db709300;
color: ${props => props.color ? props.color : "#ffffff"};
margin: 0 1em;
padding: 0.25em 1em;
outline: none;
font-size: 17px;
font-weight: 600
`
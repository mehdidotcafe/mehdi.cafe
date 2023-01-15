import styled from 'styled-components'

const BasicButton = styled.button`
cursor: pointer !important;
border: 0 !important;
background-color: ${(props) => props.theme.secondaryColor} !important;
box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%) !important;
font-family: var(${(props) => props.theme.font.title});
padding: 8px 16px !important;
`

export default BasicButton

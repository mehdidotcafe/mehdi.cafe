import React from 'react'
import styled from 'styled-components'

const Hamburger = styled.button`
margin-top: 20px;
margin-left: 32px;
margin-right: 32px;
width: 36px;
height: 24px;
position: absolute;
right: 0;
align-self: flex-start;
transform: rotate(0deg);
transition: .5s ease-in-out;
cursor: pointer;
z-index: 20;
display: none;

span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: #7a0056;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

span:nth-child(1) {
  top: ${(props) => (props.isCollapsed ? 0 : 0)}px;
  ${(props) => props.isCollapsed && 'left: 0;'}
  transform-origin: left center;
  ${(props) => props.isCollapsed && 'transform: rotate(45deg);'}
}

span:nth-child(2) {
  top: 10px;
  transform-origin: left center;
  ${(props) => props.isCollapsed && 'width: 0;'}
  ${(props) => props.isCollapsed && 'opacity: 0;'}
}

span:nth-child(3) {
  top: ${(props) => (props.isCollapsed ? 25 : 20)}px;
  ${(props) => props.isCollapsed && 'left: 0;'}
  transform-origin: left center;
  ${(props) => props.isCollapsed && 'transform: rotate(-45deg);'}
}

@media only screen and (max-width: 1170px) {
  display: block;
}
`

function MenuHeader({ isCollapsed, onClick }) {
  return (
    <Hamburger
      isCollapsed={isCollapsed}
      onClick={onClick}
      type="submit"
    >
      <span />
      <span />
      <span />
    </Hamburger>
  )
}

export default MenuHeader

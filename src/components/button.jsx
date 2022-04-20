import styled from "styled-components"

const Button = styled.button`

  background-color: ${(props) => {
    return props.bgcolor;
  }};
  color: ${(props) => {
    return props.color;
  }};
  border: ${(props) => {
    return props.border;
  }};
  height: ${(props) => {
    return props.height;
  }};
  width: ${(props) => {
    return props.width;
  }};
  borderRadius:${(props)=>{
    return  props.borderRadius;
  }}
  padding: 5px 15px;
  margin: 0px 10px;

`;


export {Button}
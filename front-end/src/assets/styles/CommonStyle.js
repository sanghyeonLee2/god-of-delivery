import styled from "styled-components";


export const P = styled.p`
  font-size: ${(props) => props.size}
`
export const VerticalSpace = styled.div`
  height: 10px;
  background-color: lightgray;
  margin: 0 ${(props) => props.$margin || "0px"}
`
import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  z-index: 50;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding: 5px;
  }
`;

import styled from "styled-components";

export const LoadingWrapper = styled.div`
    position: fixed; /* 전체 화면을 덮도록 변경 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    z-index: 50; /* 기존 UI보다 위로 */

    display: flex;
    justify-content: center;
    align-items: center; /* 정중앙 배치 */

    p {
        padding: 5px;
    }
`
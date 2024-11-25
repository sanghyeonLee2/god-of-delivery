import styled from "styled-components";

export const TitleTextWrap = styled.div`
    font-size: ${(props) =>
            props.size === "middle" ? "25px" : "35px"
    };

    p {
        align-content: center;
    }
`
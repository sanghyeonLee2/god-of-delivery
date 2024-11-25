import styled, {css} from "styled-components";


export const P = styled.p`
    font-size: ${(props) => props.size}
`

export const MiddleSizeFont = styled.span`
    color: ${(props) => props.color};

`
export const SmallSizeFont = styled.span`
    font-size: smaller;
    color: ${(props) => props.color};

`
export const MiddleSizeTitleFont = styled.div`
    font-size: 25px;

    p {
        align-content: center;
    }

`
export const LargeSizeTitleFont = styled.div`
    font-size: 35px;

    p {
        height: 70px;
        align-content: center;
    }
`
export const SmallSizeTitleFont = styled.div`
    font-size: 20px;

    p {
        height: 50px;
        align-content: center;
    }
`
export const VerticalSpace = styled.div`
    height: 10px;
    background-color: #F6F6F6;
    margin: 0 -25px;
`
export const DividingLine = styled.div`
    flex: none;
    height: 1px;
    margin: 0 -25px;
    background-color: lightgray;
`
export const FixedTextInterval = styled.ul`
    p {
        display: inline-block;
        width: 35%;
    }

    span {
        display: inline-block;
        width: 65%;
    }

`
export const FlexOnly = styled(({element: Element = 'div', ...props}) => (
    <Element {...props} />
))`
    display: flex;
`;
//기본적으로 전달되는 props가 있음

export const exampleColor = () => css`background-color: lightgray`
export const outerPadding = () => css`padding: 15px 25px;`
export const innerPadding = () => css`padding: 10px 15px;`


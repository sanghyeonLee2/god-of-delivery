import styled, {css} from "styled-components";

export const Font = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => {
        switch (props.size) {
            case "small":
                return "smaller"
            case "large":
                return "20px"
            case "x-large":
                return "28px"
            default:
                return "normal"
        }

    }};`
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
    align-items: center;
`;
//기본적으로 전달되는 props가 있음
export const exampleColor = () => css`background-color: lightgray`
export const outerPadding = () => css`padding: 15px 25px;`
export const innerPadding = () => css`padding: 10px 15px;`


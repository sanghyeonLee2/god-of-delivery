import styled, {css} from "styled-components";
import {flexLayout, setBorder} from "./Mixin";
import {COLORS} from "./colors";


export const exampleColor = () => css`background-color: lightgray`
export const outerPadding = () => css`padding: 15px 25px;`
export const innerPadding = () => css`padding: 10px 15px`

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
                return "medium"
        }

    }};`
export const SelectTwoTypes = styled.li.withConfig({
    shouldForwardProp: (prop) => prop !== 'isChecked',
})`
    background-color: ${(props) => props.isChecked && COLORS.BORDER};
    ${flexLayout("space-between", "center")};
    ${setBorder()};
    ${outerPadding()};
    height: 60px;
    margin-bottom: 20px;
`;

export const CommonSectionWrap = styled.div`
    padding: 10px 0;
`;
export const CommonPageHeader = styled.div`
    height: 55px;
    ${flexLayout("space-between")}
`
export const CommonBorder = styled.li`
    ${setBorder()};
    min-height: 115px;
    ${outerPadding()};
`
export const CommonPageWrap = styled.ul`
    min-height: 900px;
    max-width: 800px;
    margin: 0 auto;
    ${outerPadding()};
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
    ${({$hasPadding}) => $hasPadding && outerPadding()}
    min-height: 100px;

    p:nth-child(1) {
        display: inline-block;
        width: 35%;
    }

    p:nth-child(2) {
        display: inline-block;
        width: 65%;
    }

`
export const FlexOnly = styled(({element: Element = 'div', ...props}) => (
    <Element {...props} />
))`
    display: flex;
    align-items: center;
    width: ${(props) => props.width || "auto"};
    justify-content: ${(props) => props.justify || "stretch"};

`;
//기본적으로 전달되는 props가 있음


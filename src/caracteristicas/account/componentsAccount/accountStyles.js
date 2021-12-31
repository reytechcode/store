import styled from "styled-components";

export const ImgBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/background.jpg"),
})`
    flex: 1;
    background-color: #ddd;
    align-items: center;
    justify-content: center;
`;

export const ImgCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.View`
    background-color: rgba(255, 255, 255, 0.9);
    padding: 35px 25px 35px 25px;
`;
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

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

export const TxtInput = styled(TextInput)`
    width: 250px;
`;

export const TextError = styled.Text`
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 10px;
    color: #FB3640;
    font-weight: 700;
    max-width: 250px;
`;
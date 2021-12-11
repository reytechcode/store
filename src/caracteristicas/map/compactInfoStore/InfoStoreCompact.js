import React from "react";
import styled from "styled-components/native";
import { Image, View, Text, Platform } from "react-native";
import WebView from "react-native-webview";

const Item = styled(View)`
padding: 10px; 
max-width: 120px; 
align-items: center;
`;
const ImagenWebView = styled(WebView)`
border-radius: 10px; 
width: 120px; 
height: 100px;
`;

const TitleStore = styled(Text)`
text-align: center; 
font-size: 12px; 
padding-top: 5px; 
font-weight: 700;
`;

const isAndroid = Platform.OS === 'android';

export const CompactStoreInfo = ({ store }) => {

    const ImagenStore = isAndroid ? ImagenWebView: Image;
    return (
        <Item>
            <ImagenStore
                source={{ uri: store.photos[0] }}
            />
            <TitleStore
                numberOfLines={3}
            >{store.name}</TitleStore>
        </Item>
    );
}
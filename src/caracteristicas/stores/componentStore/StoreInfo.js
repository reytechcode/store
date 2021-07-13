import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper';
import styled from "styled-components/native";

const StoreCard = styled(Card) `
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
const StoreCardCover = styled(Card.Cover) `
    padding: ${(props) => props.theme.space[4]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Title = styled.Text `
    font-family: ${(props) => props.theme.fonts.heading}
    font-size: ${(props) => props.theme.fontSizes.body}
    color: ${(props) => props.theme.colors.text.primary}
`;
const Address = styled(Text) `
    font-family: ${(props) => props.theme.fonts.body}
    font-size: ${(props) => props.theme.fontSizes.caption}
`;
const Info = styled(View) `
    padding: ${(props) => props.theme.space[3]};
`;
export const StoreInfo = ({ store = {}}) => {
    const {
        name = "WAWA NEGRO CAFE",
        icon, 
        photos = ["https://media-cdn.tripadvisor.com/media/photo-s/1a/ea/8e/0c/wawa-negro-cafe-es-una.jpg"],
        address = "Av Veintimilla 37, Tulcán",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarity,
    } = store;
    return (
        <StoreCard elevation={5}>
            <StoreCardCover
                key={name}
                source={{uri: photos[0]}}
            />
            <Info>
                <Title>{name}</Title>
                <Address>{address}</Address>
            </Info>
        </StoreCard>
    )
}

const styles = StyleSheet.create({
    
})

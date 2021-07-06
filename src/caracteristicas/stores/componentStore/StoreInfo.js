import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper';
import styled from "styled-components/native";

const StoreCard = styled(Card) `
    background-color: white;
`;
const StoreCardCover = styled(Card.Cover) `
    padding: 18px;
    background-color: white;
`;
const Title = styled.Text `
    padding-left: 18px;
    padding-bottom: 4px;
`;
const Address = styled(Text) `
    padding-left: 18px;
    padding-bottom: 18px;
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
            <Title>{name}</Title>
            <Address>{address}</Address>
        </StoreCard>
    )
}

const styles = StyleSheet.create({
    
})

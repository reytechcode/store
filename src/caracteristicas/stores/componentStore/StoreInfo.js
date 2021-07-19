import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper';
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import estrella from "../../../../assets/estrella";

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
const Rating = styled(View) `
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
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
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    
    return (
        <StoreCard elevation={5}>
            <StoreCardCover
                key={name}
                source={{uri: photos[0]}}
            />
            <Info>
                <Title>{name}</Title>
                <Rating>
                    {ratingArray.map(() => (
                        <SvgXml xml={estrella} width={20} height={20}/>
                    ))}
                </Rating>
                <Address>{address}</Address>
            </Info>
        </StoreCard>
    )
}

const styles = StyleSheet.create({
    
})

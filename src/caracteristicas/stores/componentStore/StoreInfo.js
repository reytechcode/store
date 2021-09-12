import React from 'react'
import { StyleSheet} from 'react-native'
import { SvgXml } from "react-native-svg";
import estrella from "../../../../assets/estrella";
import closed from "../../../../assets/closed";
import {StoreCard,
    StoreCardCover,
    Title,
    Address,
    Info,
    Rating,
    Section,
    SectionEnd,
    Icon
} from "./StoreInfoStyles";


export const StoreInfo = ({ store = {}}) => {
    const {
        name = "WAWA NEGRO CAFE",
        icon = "https://img.icons8.com/material-two-tone/384/000000/espresso-cup--v2.png", 
        photos = ["https://media-cdn.tripadvisor.com/media/photo-s/1a/ea/8e/0c/wawa-negro-cafe-es-una.jpg"],
        address = "Av Veintimilla 37, Tulcán",
        rating = 4,
        isClosed = true,
        placeId,
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
                <Section>
                    <Rating>
                        {ratingArray.map((_, i) => (
                            <SvgXml key={`star-${placeId}-${i}`} xml={estrella} width={20} height={20}/>
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosed && <SvgXml xml={closed} width={30} height={30}/>}
                        <Icon source={{uri: icon}}/>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </StoreCard>
    )
}

const styles = StyleSheet.create({
    
})

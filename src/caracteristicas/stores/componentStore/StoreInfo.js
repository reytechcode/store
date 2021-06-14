import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

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
        <View>
            <Image
                source={{uri: photos[0]}}
                resizeMethod="scale"
                style={styles.imgStore}
            />
            <Text>{name}</Text>
            <Text>{address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imgStore: {
        width: 250,
        height: 150,
    }
})

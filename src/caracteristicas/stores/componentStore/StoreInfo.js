import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper';

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
        <Card elevation={5} style={styles.card}>
            <Card.Cover
                key={name}
                source={{uri: photos[0]}}
                style={styles.imgStore}
            />
            <Text style={styles.titulo}>{name}</Text>
            <Text style={styles.direccion}>{address}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
    },
    imgStore: {
        padding: 18,
        backgroundColor: "white",
    },
    titulo: {
        paddingLeft: 18,
        paddingBottom: 4,
    },
    direccion: {
        paddingLeft: 18,
        paddingBottom: 18,
    }
})

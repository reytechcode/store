import React, { useState } from "react";
import { StoreInfo } from "../componentStore/StoreInfo";
import { View, ScrollView } from "react-native";
import { List } from "react-native-paper";

export const DetallesStorePantalla = ({ route }) => {
    const [bebidas, setBebidas] = useState(false);
    const [desayunos, setDesayunos] = useState(false);
    const [almuerzos, setAlmuerzos] = useState(false);
    const [comidaRapida, setComidaRapida] = useState(false);
    const { store } = route.params;
    return (
        <View style={{ flex:1 }}>
            <StoreInfo store={store}/>
            <ScrollView>
                <List.Accordion
                    title="Bebidas"
                    left={(props) => <List.Icon {...props} icon="beer"/>}
                    expanded={bebidas}
                    onPress={() => setBebidas(!bebidas)}
                >
                    <List.Item title="1lt de Coca-cola"/>
                    <List.Item title="1lt de Agua"/>
                    <List.Item title="1lt de Limonada"/>
                </List.Accordion>

                <List.Accordion
                    title="Desayunos"
                    left={(props) => <List.Icon {...props} icon="coffee"/>}
                    expanded={desayunos}
                    onPress={() => setDesayunos(!desayunos)}
                >
                    <List.Item title="Café con tostadas"/>
                    <List.Item title="Huevo ranchero"/>
                    <List.Item title="Fruta fresca"/>
                </List.Accordion>
                <List.Accordion
                    title="Almuerzos"
                    left={(props) => <List.Icon {...props} icon="noodles"/>}
                    expanded={almuerzos}
                    onPress={() => setAlmuerzos(!almuerzos)}
                >
                    <List.Item title="Arroz con camarones"/>
                    <List.Item title="Mote con chicharrón"/>
                    <List.Item title="Pasta"/>
                </List.Accordion>

                <List.Accordion
                    title="Comida Rápida"
                    left={(props) => <List.Icon {...props} icon="hamburger"/>}
                    expanded={comidaRapida}
                    onPress={() => setComidaRapida(!comidaRapida)}
                >
                    <List.Item title="Pizzas"/>
                    <List.Item title="Papi pollo"/>
                    <List.Item title="Hamburguesa"/>
                </List.Accordion>
            </ScrollView>
        </View>
    );
};
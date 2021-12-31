import React from "react";
import { ImgBackground,
     ImgCover,
     Container
     } from "../componentsAccount/accountStyles";
import { Button } from "react-native-paper";

export const InicioPantalla = ({ navigation }) => {
    return (
        <ImgBackground>
            <ImgCover/>
            <Container>
                <Button
                    icon="login"
                    color="#66f"
                    mode="contained"
                    onPress={() => navigation.navigate("IniciarSesion")}
                >
                    Iniciar Sesión
                </Button>

                <Button
                    icon="book-open-outline"
                    color="#66f"
                    mode="contained"
                    onPress={() => navigation.navigate("CrearCuenta")}
                    style={{marginTop: 20}}
                >
                    Crear Cuenta
                </Button>
            </Container>
        </ImgBackground>
    );
}
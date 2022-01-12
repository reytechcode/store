import React, { useState, useContext } from "react";
import { ImgBackground,
    ImgCover,
    Container,
    TxtInput,
    TextError
 } from "../componentsAccount/accountStyles";
import { AuthenticationContext } from "../../../servicios/authentication/authenticationContext";
import { Button } from "react-native-paper";
 
export const CrearCuentaPantalla = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, error } = useContext(AuthenticationContext);

    return(
        <ImgBackground>
            <ImgCover/>
                <Container>
                    <TxtInput
                        label="Correo Electrónico"
                        value={email}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(u) => setEmail(u)}
                    />
                    <TxtInput
                        label="Contraseña"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        style={{marginTop: 15}}
                        onChangeText={(p) => setPassword(p)}
                    />
                    <TxtInput
                        label="Repetir la Contraseña"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        style={{marginTop: 15}}
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />

                    <TextError>
                        {error}
                    </TextError>
                    
                    <Button
                        icon="book-open-outline"
                        color="#66f"
                        mode="contained"
                        onPress={() => onRegister(email, password, repeatedPassword)}
                    >
                        Crear Cuenta
                    </Button>
                </Container>        
        </ImgBackground>
    );
}
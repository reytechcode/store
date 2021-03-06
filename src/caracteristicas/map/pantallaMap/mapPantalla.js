import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../componentsMap/searchComponentMap";
import { LocationContext } from "../../../servicios/stores/location/locationContext";
import { StoresContext } from "../../../servicios/stores/StoresContext";
import { MapCallout } from "../componentsMap/calloutMap";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

export const MapPantalla = ({ navigation }) => {
    const { location } = useContext(LocationContext);
    const { stores = [] } = useContext(StoresContext);
    const [latDelta, setLatDelta] = useState(0);
    const { lat, lng, viewport } = location;
    
    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);

    return (
        <>
            <Search/>
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {stores.map((store) => {
                    return (
                        <MapView.Marker
                            key={store.name}
                            title={store.name}
                            coordinate={{
                                latitude: store.geometry.location.lat,
                                longitude: store.geometry.location.lng,
                            }}
                        >
                            <MapView.Callout
                                onPress={() => navigation.navigate("Detalles", { store, })}
                            >
                                <MapCallout store={store}/>
                            </MapView.Callout>

                        </MapView.Marker>
                        
                    );
                })} 
            </Map>
        </>
    );
}
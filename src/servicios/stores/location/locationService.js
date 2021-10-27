import camelize from "camelize";
import { locations } from "./location";

export const locationRequest = (searchCiudad) => {
    return new Promise((resolve, reject) => {
        const locationData = locations[searchCiudad];
        if(!locationData){
            reject("No encontrado");
        }
        resolve(locationData);
    });
};

export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];
    const { lat, lng } = geometry.location;
    return { lat, lng };
};
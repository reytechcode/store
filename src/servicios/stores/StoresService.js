import { ciudades } from "./storesData/index";
import camelize from "camelize";

export const storesRequest = (location = "0.8147717,-77.7369835") => {
    return new Promise((resolve, reject) => {
        const ciudad = ciudades[location];
        if(!ciudad) {
            reject("Ciudad no encontrada");
        }
        resolve(ciudad);
    });
}
export const storesTransform = ({ results = [] }) => {
    const mappedResults = results.map((store) => {
        return {
            ...store,
            isClosed: store.business_status ===   "CLOSED_TEMPORARILY",          
        };
    });
    return camelize(mappedResults);
}


import { ciudades } from "./storesData/index";
import camelize from "camelize";

export const storesRequest = (location) => {
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
            address: store.vicinity,                      
        };
    });
    return camelize(mappedResults);
}


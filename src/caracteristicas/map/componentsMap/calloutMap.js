import React from "react";
import { CompactStoreInfo } from "../compactInfoStore/InfoStoreCompact";

export const MapCallout = ({ store }) => {
    return (
        <CompactStoreInfo store={store}/>  
    );
}
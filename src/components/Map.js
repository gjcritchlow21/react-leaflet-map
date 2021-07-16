import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
})

export default function Map() {
    const [center, setCenter ] = useState([44.4759, -73.2121])

    return (
        <div id="mapContainer">
            <MapContainer
            center={center}
            zoom={6}
            style={{height: "60vh"}}
            >
                <TileLayer
                url='https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png'
                attribution= '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center} icon={DefaultIcon}>
                    <Popup>Burlington is here</Popup>
                </Marker>

                 <Marker position={[44.4759, -72.214]} icon={DefaultIcon}>
                    <Popup>Burlington is not here</Popup>
                </Marker> 
                <Marker position={[43.4759, -73.2121]} icon={DefaultIcon}>
                    <Popup>Burlington is not here either</Popup>
                </Marker> 
            </MapContainer>
            
        </div>
    )
}

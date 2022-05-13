import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css';
import { coordenadaDTO } from "./coordendas.model";
import { useState } from "react";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16,37]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa(props: mapaProps){
    const [coordenadas, setCoordenadas] = useState<coordenadaDTO[]>([])

    return(
        <MapContainer
            center={[18.46603301601728, -69.93107663006501]} zoom={14}
            style={{height: props.height}}
        >
            <TileLayer attribution = "ReactPeliculas"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            
            <ClickMapa setPunto={coordenadas =>{
                setCoordenadas([coordenadas])
            }}/>
            {coordenadas.map(coordenada => <Marcador key={coordenada.lat+coordenada.lng}
            {...coordenada}
            />)}
        </MapContainer>
    )
}

function ClickMapa(props:clickMapaProps){
    useMapEvent('click', e=>{
        props.setPunto({lat: e.latlng.lat, lng: e.latlng.lng})
    })
    return null
}

function Marcador (props: coordenadaDTO){
    return(
        <Marker position = {[props.lat, props.lng]}/>
    )
}

interface clickMapaProps{
    setPunto(coordenadas: coordenadaDTO):void;
}

interface mapaProps{
    height: string;
}

Mapa.defaultProps ={
    height: '500px'
}
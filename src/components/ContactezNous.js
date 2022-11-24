import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
// import { TileLayer } from 'react-leaflet/TileLayer'
// // import { useMap } from 'react-leaflet/hooks'
// import { Marker } from 'react-leaflet/Marker'
// import { Popup } from 'react-leaflet/Popup'
// import Adresse from '../assets/adresse.png'
// import { Marker } from '@react-google-maps/api'
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../styles/contactezNous.css'

function ContactezNous(){
    const emplacement=[14.758907478546996, -17.44154814513603];
    return(
        <div>
          <head>
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossorigin=""
              />
            </head>
            <body>
                <MapContainer center={emplacement} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={emplacement}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
                </MapContainer>
                <p>c'est la page contactez-nous</p>
            </body>
        </div>
    )
    }
export default ContactezNous;
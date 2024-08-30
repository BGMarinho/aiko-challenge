import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Aiko from '../images/aiko.png';
import Footer from './Footer';
import './App.css';

export default function App() {
  return (
    <div className="map-container">
      <img className="aiko-logo" src={Aiko} alt="aiko-logo" />
      <MapContainer
        className="map"
        center={[51.505, -0.09]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <Footer />
    </div>
  );
}

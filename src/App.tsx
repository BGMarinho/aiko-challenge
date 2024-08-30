// import Equipment from '../data/equipment.json';
import { getEquipmentsLastPositions } from '../hooks/useEquipment.ts';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Aiko from '../images/aiko.png';
import Footer from './Footer';
import './App.css';

export default function App() {
  const equipments = getEquipmentsLastPositions();
  console.log(equipments);

  return (
    <div className="map-container">
      <img className="aiko-logo" src={Aiko} alt="aiko-logo" />
      <MapContainer
        className="map"
        center={[51.505, -0.09]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {equipments.map((equipmentLastPosition, index) => {
          return (
            <Marker
              key={index}
              position={[equipmentLastPosition.lat, equipmentLastPosition.lon]}
            >
              <Popup>
                teste linha 1 <br /> teste linha 2
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <Footer />
    </div>
  );
}

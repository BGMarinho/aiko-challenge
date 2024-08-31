import {
  getLastPositionPerEquipment,
  getEquipmentName,
  getEquipmentCurrentState,
} from '../hooks/useEquipment.ts';
import EquipmentPositionHistory from '../data/equipmentPositionHistory.json';
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
        center={[-19.126536, -45.947756]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {EquipmentPositionHistory.map((positionedEquipment, index) => {
          return (
            <Marker
              key={index}
              position={getLastPositionPerEquipment(
                positionedEquipment.positions,
              )}
              // icon={}
            >
              <Popup>
                {getEquipmentName(positionedEquipment.equipmentId)?.name}
                <br />
                {
                  getEquipmentCurrentState(positionedEquipment.equipmentId)
                    ?.name
                }
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <Footer />
    </div>
  );
}

import {
  getLastPositionPerEquipment,
  getEquipmentName,
  getEquipmentCurrentState,
} from '../../hooks/useEquipment';
import EquipmentPositionHistory from '../../data/equipmentPositionHistory.json';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.css';

export default function Map() {
  return (
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
              {getEquipmentCurrentState(positionedEquipment.equipmentId)?.name}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

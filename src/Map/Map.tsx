import EquipmentPositionHistory from '../../data/equipmentPositionHistory.json';
import { getLastPositionPerEquipment } from '../../helpers/getLastPositionPerEquipment';
import { getEquipmentName } from '../../helpers/getEquipmentName';
import { getEquipmentCurrentState } from '../../helpers/getEquipmentCurrentState';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import './styles.css';

export default function Map() {
  const [showStateHistory, setShowStateHistory] = useState(false);

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
        // console.log('equipamento object: ', positionedEquipment.equipmentId);
        return (
          <Marker
            key={index}
            position={getLastPositionPerEquipment(
              positionedEquipment.positions,
            )}
            // icon={}
          >
            <Popup>
              <div className="popup-info-container">
                <span>
                  <b>Nome:</b>{' '}
                  {getEquipmentName(positionedEquipment.equipmentId)}
                </span>
                <span>
                  <b>Status:</b>{' '}
                  {getEquipmentCurrentState(positionedEquipment.equipmentId)}
                </span>
              </div>
              <button
                id="state-history-button"
                onClick={() => setShowStateHistory(!showStateHistory)}
              >
                <i>Histórico de estados</i>
              </button>
              {showStateHistory && <div>detalhes</div>}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

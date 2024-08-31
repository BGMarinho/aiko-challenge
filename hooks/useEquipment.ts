import { LatLngExpression } from 'leaflet';
import Equipments from '../data/equipment.json';
import EquipmentState from '../data/equipmentState.json';
import EquipmentStateHistory from '../data/equipmentStateHistory.json';

export function getLastPositionPerEquipment(
  positionsArray: {
    date: string;
    lat: number;
    lon: number;
  }[],
) {
  return [
    positionsArray[positionsArray.length - 1].lat,
    positionsArray[positionsArray.length - 1].lon,
  ] as LatLngExpression;
}

export function getEquipmentName(equipmentId: string) {
  const equipmentObj = Equipments.find(
    (equipment) => equipment.id === equipmentId,
  );
  return equipmentObj;
}

export function getEquipmentCurrentState(equipmentId: string) {
  const equipmentStates = EquipmentStateHistory.find((equipment) => {
    if (equipment.equipmentId === equipmentId) {
      return equipment;
    }
  });

  function getStateName(stateId: string | undefined) {
    const stateName = EquipmentState.find((equipment) => {
      if (equipment.id === stateId) {
        return equipment;
      }
    });
    return stateName;
  }

  const stateName = getStateName(
    equipmentStates?.states[equipmentStates.states.length - 1].equipmentStateId,
  );

  return stateName;
}

// console.log('EquipmenState: ', EquipmentState);
// console.log('EquipmenStateHistory: ', EquipmentStateHistory);

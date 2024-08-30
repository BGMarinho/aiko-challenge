import EquipmentPositions from '../data/equipmentPositionHistory.json';
import Equipments from '../data/equipment.json';

export function getEquipmentsLastPositions() {
  const equipmentsLastPositions = EquipmentPositions.map((equipment) => {
    return equipment.positions[EquipmentPositions.length];
  });
  return equipmentsLastPositions;
}

export function equipments() {}
equipments();

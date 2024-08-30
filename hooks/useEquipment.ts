import EquipmentPositionHistory from '../data/equipmentPositionHistory.json';
import Equipments from '../data/equipment.json';
import EquipmentModel from '../data/equipmentModel.json';
import EquipmentState from '../data/equipmentState.json';
import EquipmentStateHistory from '../data/equipmentStateHistory.json';

export function getEquipmentsLastPositions() {
  const equipmentsLastPositions = EquipmentPositionHistory.map((equipment) => {
    return equipment.positions[EquipmentPositionHistory.length];
  });
  return equipmentsLastPositions;
}

export function equipments() {
  const equipmentObj = EquipmentPositionHistory.map((equipment) => {
    return equipment;
  });
  console.log(equipmentObj);
}
equipments();

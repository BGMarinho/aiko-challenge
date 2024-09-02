import EquipmentState from '../data/equipmentState.json';
import EquipmentStateHistory from '../data/equipmentStateHistory.json';

export function getEquipmentCurrentState(equipmentId: string) {
  const [equipmentStates] = EquipmentStateHistory.filter((equipment) => {
    equipment.equipmentId === equipmentId;
  });

  function getStateName(stateId: string | undefined) {
    // console.log('estado que chegou na função', stateId);
    const [stateName] = EquipmentState.filter((equipmentStateObj) => {
      equipmentStateObj.id === stateId;
    });
    return stateName;
  }

  // console.log('obj que chegou: ', equipmentStates);
  const stateName = getStateName(
    equipmentStates?.states[equipmentStates.states.length - 1].equipmentStateId,
  );

  return stateName;
}

// console.log('EquipmenState: ', EquipmentState);
// console.log('EquipmenStateHistory: ', EquipmentStateHistory);

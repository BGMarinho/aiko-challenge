import EquipmentState from '../data/equipmentState.json';
import EquipmentStateHistory from '../data/equipmentStateHistory.json';

export function getEquipmentCurrentState(equipmentId: string) {
  const [equipmentStates] = EquipmentStateHistory.filter((equipment) => {
    if (equipment.equipmentId === equipmentId) return equipment;
  });

  function getStateName(stateId: string | undefined) {
    const stateNameObj = EquipmentState.filter((equipmentStateObj) => {
      if (equipmentStateObj.id === stateId) return equipmentStateObj;
    });
    console.log('stateName: ', stateNameObj);
    return stateNameObj[0];
  }

  const stateName = getStateName(
    equipmentStates?.states[equipmentStates.states.length - 1].equipmentStateId,
  );

  return stateName.name;
}

// console.log('EquipmenState: ', EquipmentState);
// console.log('EquipmenStateHistory: ', EquipmentStateHistory);

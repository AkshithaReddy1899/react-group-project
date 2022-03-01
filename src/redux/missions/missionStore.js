const JOIN_MISSION = 'MISSIONS/JOIN_MISSION';
const LEAVE_MISSION = 'MISSIONS/LEAVE_MISSION';

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionStore = (state = [], action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return [...state, action.payload];
    case LEAVE_MISSION:
      return [...state.filter((mission) => mission.id !== action.payload)];
    default:
      return state;
  }
};

export default missionStore;

const GET_MISSIONS = 'MISSIONS/GET_MISSIONS';

const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const getMissionsFromAPI = () => async (dispatch) => {
  dispatch(
    getMissions(
      await (await fetch('https://api.spacexdata.com/v3/missions')).json()
    )
  );
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;

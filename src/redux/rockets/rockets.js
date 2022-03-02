const FETCH_DATA = 'spaceX/rockets/FETCH_DATA';
const RESERVE_ROCKET = 'spaceX/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'spaceX/rockets/CANCEL_ROCKET';

const initialState = [];

export const fetchData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const cancelRocket = (id) => ({
  type: CANCEL_ROCKET,
  payload: id,
});

export const fetchDataFromApi = () => async (dispatch) => {
  fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      Object.entries(data).forEach(([key, value]) => {
        const rocket = [];
        rocket.key = key;
        rocket.id = value.id;
        rocket.name = value.rocket_name;
        rocket.description = value.description;
        rocket.type = value.engines.type;
        rocket.images = value.flickr_images;
        dispatch(fetchData(rocket));
      });
    });
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, action.payload];
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case CANCEL_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export default reducer;

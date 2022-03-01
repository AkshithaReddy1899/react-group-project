const FETCH_DATA = 'spaceX/rockets/FETCH_DATA';

const initialState = [];

export const fetchData = (data) => ({
  type: FETCH_DATA,
  payload: data,
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
        const rocket = {};
        rocket.key = key;
        rocket.id = value.id;
        rocket.name = value.rocket_name;
        rocket.type = value.engines.type;
        rocket.images = value.flickr_images;
        console.log(rocket);
      });
      dispatch(fetchData(data));
    });
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;

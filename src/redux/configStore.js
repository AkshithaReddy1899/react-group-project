import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';
import rockets from './rockets/rockets';
import missionStore from './missions/missionStore';

const reducer = combineReducers({
  missionsReducer,
  rockets,
  missionStore,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

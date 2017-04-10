import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action receieved', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // cannot state.push, never directly modify state, always make a new instance
      // return state.concat([ action.payload.data ]);
      return [action.payload.data, ...state]; // ES6 magic
  }
  return state;
}

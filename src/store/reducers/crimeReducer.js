import {
  GET_CRIME_MOVIES
} from '../types'

const initialState = {
  crimeMovies: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  var newState = {} 
  switch (action.type) {
      case GET_CRIME_MOVIES:
        newState = {
          ...newState,
          crimeMovies : [...action.payload]
        }
        break; 
    default:
      return state;
  }
  return newState;
}
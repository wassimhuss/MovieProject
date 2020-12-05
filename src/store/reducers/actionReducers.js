import {
  GET_MOVIES,
} from '../types'

const initialState = {
  actionMovies: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {

  var newState = {}
 
  switch (action.type) {
    case GET_MOVIES:
 
      newState = {
        ...newState,
        actionMovies : action.payload
      }
    
      break;

  
      
    default:
      return state;
  }
  return newState;
}
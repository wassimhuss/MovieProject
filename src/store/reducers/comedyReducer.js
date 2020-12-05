import {
  GET_COMEDYMOVIES,
} from '../types'

const initialState = {
 
  comedyMovies: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {

  var newState = {}
 
  switch (action.type) {


      case GET_COMEDYMOVIES:
      newState = {
        ...newState,
        comedyMovies : action.payload
      }
      
      break;
      
    default:
      return state;
  }
  return newState;
}
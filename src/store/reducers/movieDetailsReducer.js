import {
  GET_MOVIE_DETAILS,
  } from '../types'
  
  const initialState = {
     movieDetails:[]
  }
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    var newState = {}
    switch (action.type) {
        case GET_MOVIE_DETAILS:
        newState = {
          ...newState,
          movieDetails : action.payload
        }   
        break;
        
      default:
        return state;
    }
    return newState;
  }
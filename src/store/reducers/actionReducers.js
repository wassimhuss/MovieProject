import {
  GET_MOVIES,
  GET_COMEDYMOVIES,
  GET_CRIME_MOVIES
} from '../types'

const initialState = {
  actionMovies: [],
  comedyMovies: [],
  crimeMovies: [],
  loading: true,
  showCrimeMovies: '',
  movieDetails:[]


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
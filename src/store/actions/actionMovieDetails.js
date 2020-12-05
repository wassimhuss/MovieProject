import {GET_MOVIE_DETAILS} from '../types'
export const getMovieDetails = (e) => dispatch => {  
    try{
        dispatch( {
            type: GET_MOVIE_DETAILS,
            payload:e
        })
    }
    catch(e){
        return e
     }
 }
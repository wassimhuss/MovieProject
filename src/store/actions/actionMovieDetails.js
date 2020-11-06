import {GET_MOVIE_DETAILS} from '../types'

import moviesURLs from '../../requests/requests'
import axios from '../../axios/Axios'

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
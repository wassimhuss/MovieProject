import {GET_COMEDYMOVIES, MOVIES_ERROR} from '../types'

import moviesURLs from '../../requests/requests'
import axios from '../../axios/Axios'

export const getComedyMovies = () => async dispatch => {
    
    try{
        const res = await axios.get(moviesURLs[1].getURL)
        dispatch( {
            type: GET_COMEDYMOVIES,
            payload: res.data.results
        })
    }
    catch(e){
        return e
     }
 
 }
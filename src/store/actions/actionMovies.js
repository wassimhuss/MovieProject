import {GET_MOVIES, MOVIES_ERROR} from '../types'

import moviesURLs from '../../requests/requests'
import axios from '../../axios/Axios'

export const getActionMovies = () => async dispatch => {
    
    try{
        const res = await axios.get(moviesURLs[0].getURL)
        dispatch( {
            type: GET_MOVIES,
            payload: res.data.results
        })
    }
    catch(e){
        return e
     }
 
 }
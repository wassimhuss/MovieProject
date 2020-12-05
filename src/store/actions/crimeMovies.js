import {GET_CRIME_MOVIES} from '../types'

import moviesURLs from '../../requests/requests'
import axios from '../../axios/Axios'

export const getCrimeMovies = () => async dispatch => {
    
    try{
        const res = await axios.get(moviesURLs[2].getURL)
        dispatch( {
            type: GET_CRIME_MOVIES,
            payload: res.data.results
        })
    }
    catch(e){
       return e
    }

}
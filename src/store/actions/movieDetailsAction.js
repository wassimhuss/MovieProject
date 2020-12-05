import {SEND_ID} from '../types'
import axios from '../../axios/Axios'

export const sendMovieIDFunction = (movieId) => async dispatch => {
    
    try {
        console.log(movieId)
        const res = await axios.get(`movie/${movieId}?api_key=626c79faac7c27563da8ccd8e9e46539&language=en-US`)
        dispatch({
            type: SEND_ID,
            payload: res.data.original_title 
        })
    } catch (e) {
        return e
    }

}
import React,{useEffect} from 'react';
import Header from './Header';
import "./Row.css";
import {connect} from 'react-redux'
import { useHistory} from 'react-router-dom'
import {getMovieDetails} from '../store/actions/actionMovieDetails'
 const base_URL= "https://image.tmdb.org/t/p/original/"
const ItemMovies = (props) => {
 const history= useHistory(); 
const handleClick =(e)=>{
  history.push("/MovieDetails");
  props.getMovieDetails(e)
}


    return (
     
        <div className="col-ms">
            
        <div className="row">
              <h2 style={{marginLeft:'190px'},{color:'white'}}>{props.title}</h2>
          <div className="row__posters">
            {props.itemData.map(e =>(
                 
              <img 
              onClick={()=>{handleClick(e)}}
              className="row__poster"
              key={e.id}
              src={`${base_URL}${e.poster_path}`}
               alt={e.name} 
              />
            ))}
            </div>
        </div>
        </div>
    );
};
const mapStateToProps  = (state) => {
  //alert('Data' + state.movies.actionMovies)
 return {  data:state}
}

export default connect(mapStateToProps,{getMovieDetails})(ItemMovies)


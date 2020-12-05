import React, { Suspense } from 'react';
import "./Row.css";
import {connect} from 'react-redux'
import { useHistory} from 'react-router-dom'
import {getMovieDetails} from '../store/actions/actionMovieDetails'
const ItemMovies = (props) => {

  const history= useHistory(); 
  // fun btb3at ldata te3 lmovie yali we2ef 3ele . w bl movieDetails ha jib data yali b3ata 3ala lstore 
  const handleClick =(e)=>{
  history.push("/MovieDetails");
  props.getMovieDetails(e)
}
let base_IMG_URL= "https://image.tmdb.org/t/p/original/"
    return (
      <Suspense fallback={<h1> loading data..</h1>}>
        <div className="col-ms">    
        <div className="row">
              <h2 style={{marginLeft:'190px'},{color:'white'}}>{props.title}</h2>
          <div className="row__posters">
            {props.itemData.map(e =>( 
              //hon lama ef2os 3ala movie byaeml dispatch + byekhdne 3al movieDetails   
              // easy ya 3azizi :)  
              <img 
              onClick={()=>{handleClick(e)}}
              className="row__poster"
              key={e.id}
              src={`${base_IMG_URL}${e.poster_path}`}
               alt={e.name} 
              />
            ))}
            </div>
        </div>
        </div>
        </Suspense>
    );
};
const mapStateToProps  = (state) => {
 return {  data:state}
}
export default connect(mapStateToProps,{getMovieDetails})(ItemMovies)


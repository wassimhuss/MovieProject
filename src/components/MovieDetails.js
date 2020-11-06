import React from 'react';
import {connect} from 'react-redux'
import './MovieDetails.css'
import { useHistory} from 'react-router-dom'
const base_URL= "https://image.tmdb.org/t/p/original"


const MovieDetails = (props) => {
    const history= useHistory(); 
const handleClick =(e)=>{
  history.push("/");
}
    let image= props.data.movieDetails.movieDetails.poster_path;
    return (
        <div style={{width: "20%"},{height: "20%"},{marginLeft:"500px"}}>
    <div style={{width: "500px"}}>
    <img src={`${base_URL}${image}`} style={{width:"250px"},{height:"300px"}} alt="..."></img>
  <div style={{width: "500px"}}>
<h5 style={{width: "500px"},{zIndex:'565'},{color:'whitesmoke'}}>{props.data.movieDetails.movieDetails.name}</h5>
    <p style={{width: "500px"},{color:'whitesmoke'}}>{props.data.movieDetails.movieDetails.overview}</p>
    <button onClick={()=>{handleClick()}} className="btn btn-primary">back to movies</button>
  </div>
</div>
</div>


    );
};

const mapStateToProps  = (state) => {
    //alert('Data' + state.movies.actionMovies)
   return {data:state}
}
export default connect(mapStateToProps)(MovieDetails)

import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import {getActionMovies} from '../store/actions/actionMovies'
import {getComedyMovies} from '../store/actions/comedyMovies'
import {getCrimeMovies} from '../store/actions/crimeMovies'
import bla from '../requests/requests'
import Row from './Row'
import Header from './Header'





 function Movies(props) {
    useEffect(() => {
        // code to run on component mount
        props.getActionMovies()
      props.getComedyMovies()
         props.getCrimeMovies()
      }, [])
    // useEffect((props) => {   
    //     props.getActionMovies()
    //     props.getComedyMovies()
    //     props.getCrimeMovies()
        
    //   });


         
         return(
            <div>
               <Header></Header>
             <Row title={'Action Movies'}  data={props.data.actionMovies.actionMovies}> </Row> 
              <Row title={'Comedy movies'}  data={props.data.comedyMovies.comedyMovies}> </Row>
              <Row title={'Crime movies'}  data={props.data.crimeMovies.crimeMovies}> </Row>
              
              </div>

         )
         
       
    
    
 
 }
const mapStateToProps  = (state) => {
    //alert('Data' + state.movies.actionMovies)
   return {  data:state}
}

export default connect(mapStateToProps, {getActionMovies, getComedyMovies,getCrimeMovies})(Movies)

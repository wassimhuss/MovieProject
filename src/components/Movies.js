import React, { Suspense,useEffect} from 'react'
import {connect} from 'react-redux'
import {getActionMovies} from '../store/actions/actionMovies'
import {getComedyMovies} from '../store/actions/comedyMovies'
import {getCrimeMovies} from '../store/actions/crimeMovies'
import Row from './Row'
import Header from './Header'
 function Movies(props) {
    useEffect(() => {
        props.getActionMovies()
        props.getComedyMovies()
        props.getCrimeMovies()
      }, []) 
            return(
            <div>    
               <Header></Header>
               {/* lezm erja3 a3mel .map ba3den */}
               <Suspense fallback={<h1> loading data..</h1>}>
                <Row title={'Action Movies'}  data={props.movies.actionMovies.actionMovies}></Row> 
               </Suspense>
              <Row title={'Comedy movies'}  data={props.movies.comedyMovies.comedyMovies}></Row>
              <Row title={'Crime movies'}  data={props.movies.crimeMovies.crimeMovies}></Row>
            </div>
         )
 }
const mapStateToProps  = (state) => {
   return {  movies:state}
}

export default connect(mapStateToProps, {getActionMovies, getComedyMovies,getCrimeMovies})(Movies)

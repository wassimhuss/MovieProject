import './App.css';
import Movies from './components/Movies';
import {BrowserRouter,Route} from 'react-router-dom'
import MovieDetails from './components/MovieDetails';


function App() {
  return (

    <BrowserRouter>
      <div className="p-3 mb-2 bg-dark">
        <Route  exact path='/' component={Movies}></Route>
        <Route  path='/MovieDetails' component={MovieDetails}></Route>
      </div>
    </BrowserRouter>


  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from '../src/Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          
            setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <Link to="/"></Link>
      <Link to="/movies/:id"></Link>
      <SavedList list={[ /* This is stretch */]} />
      <Route path="/movies/:id ">
      <Movie movies={movieList}/>
      
      
      </Route>

      <Route path="/">      
     <MovieList movies={movieList}/> 
      </Route>
      
      <div>Replace this Div with your Routes</div>
    </div>
  );
}

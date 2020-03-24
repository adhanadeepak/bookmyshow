import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import './App.css';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './pages/Home/home';
import Header from './components/Header';

function App() {

  const[Data, setData] = useState({});
  const[movieList, setMovieList] = useState([]);

    const getRecommendedMovies = (Data) => {
        let movieList = {};

        Data.movieData.forEach((item) => {
            movieList[item.id] = { title: item.title, avgRating: item.avgRating, genre: item.genre,censor: item.censor}
        });

        setMovieList(movieList);

    };


    const getData = () => {
      fetch('https://demo6852610.mockable.io/movie-data')
          .then(res => res.json())
          .then((response) => {
              console.log(response);
              getRecommendedMovies(response);
              setData(response);
          })
          .catch((err) => {
              console.error('error: ', err);
          })
  };

  useEffect(() => {
      getData();
  }, []);


  return (
    <div className="App">
        <Router>
            <Header movieList={Data.movieData}/>

            <Switch>
                <Route path="bookmyshow" exact>
                    <Home Data={Data} movieList={movieList} />
                </Route>
            </Switch>
        </Router>


    </div>
  );
}

export default App;

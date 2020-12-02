// import React, { Component } from 'react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './views/HomePage.js';
// import HomeView from './views/HomeView.js';
import NotFoundViews from './views/NotFoundView.js';
// import Cast from './views/Cast.js';
// import Reviews from './views/Reviews.js';
import MoviesPage from './views/MoviesPage.js';
import MovieDetailsPage from './views/MovieDetailsPage.js';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/movies" component={MoviesPage} />
    <Route path="/movies/:movieId" component={MovieDetailsPage} />
    {/* <Route exact path="/movies/movieId/cast" component={Cast} />
    <Route exact path="/movies/:movieId/reviews" component={Reviews} /> */}
    <Route component={NotFoundViews} />
  </Switch>
);

export default App;

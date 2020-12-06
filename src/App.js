import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage.js';
// import MoviesPage from './views/MoviesPage.js';
// import MovieDetailsPage from './views/MovieDetailsPage.js';
// import NotFoundView from './views/NotFoundView.js';
import routes from './service/routes.js';
import AppBar from './comonent/AppBar/AppBar.js';

import './App.css';

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movie-page" */),
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView.js' /* webpackChunkName: "not-found-view-page" */
  ),
);
function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />

        <Route component={NotFoundView} />
      </Switch>
    </>
  );
}

export default App;

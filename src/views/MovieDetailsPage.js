import React, { Component, lazy } from 'react';
// import Reviews from '../comonent/Reviews/Reviews.js';
// import Cast from '../comonent/Cast/Cast.js';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import { fetchDetails } from '../service/serviceFetch.js';
import routes from '../service/routes';
import MoviePreview from '../comonent/MoviePreview/MoviePreview.js';
import style from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../comonent/Cast/Cast.js' /* webpackChunkName: "cast-page" */),
);
const Reviews = lazy(() =>
  import(
    '../comonent/Reviews/Reviews.js' /* webpackChunkName: "reviews-page" */
  ),
);

class MovieDetailsPage extends Component {
  state = {
    id: '',
    genres: [],
    release_date: '',
    overview: '',
    vote_average: 0,
    poster_path: '',
    title: '',
    original_title: '',
    name: '',
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    fetchDetails(moviesId).then(data => {
      this.setState({ ...data });
    });
  }

  handleGoback = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      history.push(location.state.from);
      console.log('step1');
      console.log(location.state.from);
      return;
    }
    console.log('step2');
    history.push(routes.home);
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleGoback} className={style.btn}>
          Go back
        </button>

        <MoviePreview
          genres={this.state.genres}
          release_date={this.state.release_date}
          overview={this.state.overview}
          vote_average={this.state.vote_average}
          poster_path={this.state.poster_path}
          title={this.state.title}
          original_title={this.state.original_title}
          name={this.state.name}
        />
        <p>Additional information</p>
        <ul key={this.state.id}>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={routes.cast} component={Cast} />
          <Route path={routes.reviews} component={Reviews} />
        </Switch>
      </>
    );
  }
}
export default withRouter(MovieDetailsPage);

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews.js';
// import { render } from "@testing-library/react";

export default class MovieDetailsPage extends Component {
  state = {
    page: null,
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=401d61f37c17d956a98039a1a0734109&language=en-US`,
    );
    // console.log(response.data.poster_path);
    this.setState({ page: response.data });
    return;
  }

  render() {
    // console.log(this.state.page);
    return (
      <>
        {this.state.page && (
          <div>
            <div>
              <Link to="/">Go Back</Link>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w300${this.state.page.poster_path}`}
              alt=""
            />
            <h1>
              {this.state.page.title}({this.state.page.release_date})
            </h1>
            <h2>Overview</h2>
            <p>{!this.state.page.overview && 'опис відсутній'}</p>
            <h2>Genres</h2>
            <p>EBSENT(відсутній)</p>
            <p>Addition information</p>

            <ul>
              <li>
                <Link to={`${this.props.match.url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${this.props.match.url}/revievs`}>Revievs</Link>
              </li>
            </ul>

            <Switch>
              <Route
                exact
                path={`${this.props.match.path}/:revievs`}
                render={props => <Reviews {...props} id={this.state.page.id} />}
              />
              <Route
                exact
                path={`${this.props.match.path}/:cast`}
                render={props => <Cast {...props} id={this.state.page.id} />}
              />
            </Switch>
          </div>
        )}
      </>
    );
  }
}

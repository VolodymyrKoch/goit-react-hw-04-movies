import React, { Component } from 'react';
// import queryString from 'query-string';
import queryString from 'query-string';
import { fetchQuery } from '../service/serviceFetch.js';
import { NavLink } from 'react-router-dom';
// import style from './MovieDetailsPage.module.css';

export default class MoviePage extends Component {
  state = {
    results: [],
    value: '',
  };
  componentDidMount() {
    const { value } = this.props.location.search;
    console.log(value);
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      this.searchMovie(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: oldQuery } = queryString.parse(prevProps.location.search);
    const { query: newQuery } = queryString.parse(this.props.location.search);

    if (oldQuery !== newQuery) {
      this.searchMovie(newQuery);
    }
  }
  searchMovie(value) {
    fetchQuery(value).then(data => {
      this.setState({ results: data.results });
    });
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.value) {
      return;
    }
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.value}`,
    });
  };
  render() {
    console.log(this.state);
    const { value } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="value"
            onChange={this.handleChange}
            value={value}
            autoFocus
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.state.results.map(film => (
            <li key={film.id}>
              <NavLink
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: this.props.location },
                }}
              >
                {film.original_name ||
                  film.name ||
                  film.original_title ||
                  film.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

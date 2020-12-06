import React, { Component } from 'react';
import { fetchTrending } from '../service/serviceFetch.js';
import { NavLink } from 'react-router-dom';

class HomePage extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetchTrending().then(data => {
      this.setState({ data: data.results });
    });
  }
  render() {
      return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.data.map(film => (
            <li key={film.id}>
              <NavLink
                to={{
                  pathname: `/movies/${film.id}`,
                 
                }}
              >
                {film.original_name ||
                  film.name ||
                  film.original_title ||
                  film.title}
                {}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';
//import { Test } from './Cast.styles';

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=401d61f37c17d956a98039a1a0734109&language=en-US`,
    );
    // console.log(response);
    this.setState({ actors: response.data.cast });
  }
  render() {
    return (
      <ul>
        {this.state.actors ?
          this.state.actors.map(e => (
            <li key={e.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${e.profile_path}`}
                alt=""
              />
              <h2>{e.name}</h2>
              <p>character: {e.character}</p>
            </li>
          )):<p>ікторів ще не добавили</p>}
      </ul>
    );
  }
}
export default Cast;

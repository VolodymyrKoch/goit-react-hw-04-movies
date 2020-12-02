import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';
//import { Test } from './Cast.styles';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/reviews?api_key=401d61f37c17d956a98039a1a0734109&language=en-US&page=1`,
    );
    // console.log(response.data.result);
    this.setState({ reviews: response.data.result });
  }
  render() {
    return (
      <ul>
        {this.state.reviews.length > 0 ? (
          this.state.reviews.map(e => (
            <li key={e.id}>
              <h2>Autor:{e.author}</h2>
              <p>{e.content}</p>
            </li>
          ))
        ) : (
          <p>Опис на даний момент в розробці</p>
        )}
      </ul>
    );
  }
}
export default Reviews;

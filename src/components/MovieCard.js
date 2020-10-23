import React from 'react';
import { addFavorite, removeFromFavourites } from '../actions';

class MovieCard extends React.Component {
  handleFavoritesClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavorite(movie));
  };

  handleUnFavoritesClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  render() {
    const { movie, isFavorite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavorite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavoritesClick}
              >
                UnFavorite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavoritesClick}
              >
                Favorite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

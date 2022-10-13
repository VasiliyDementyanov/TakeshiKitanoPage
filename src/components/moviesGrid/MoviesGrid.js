import React from "react";
import styles from "./MoviesGrid.scss";
import Movie from "../movie/Movie";

class MoviesGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movieElements = this.props.movies.map((movie, index) => (
      <Movie key={movie.id} movie={movie} />
    ));

    return (
      <div className={styles.contentWrapper}>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.props.sortByNew}
          >
            New
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.props.sortByOld}
          >
            Old
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.props.sortByAverageVote}
          >
            Average vote
          </button>
        </div>
        <div className={styles.moviesWrapper}>{movieElements}</div>
      </div>
    );
  }
}
export default MoviesGrid;

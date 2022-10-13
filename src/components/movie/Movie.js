import React from "react";
import axios from "axios";
import styles from "./Movie.scss";

import Spinner from "./Spinner.svg";

class Movie extends React.Component {
  constructor(props) {
    super(props);

    const dateIsNotPresented = "Date is not provided";

    if (
      props.movie.hasOwnProperty("release_date") &&
      props.movie.release_date !== ""
    ) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const d = new Date(props.movie.release_date);
      const day = d.getDate();
      const month = monthNames[d.getMonth()];
      const year = d.getFullYear();
      const textReleaseDate = month.slice(0, 3) + " " + day + ", " + year;
      props.movie.release_date_text = textReleaseDate;
    } else {
      props.movie.release_date_text = dateIsNotPresented;
    }

    if (!props.movie.title) {
      props.movie.title = props.movie.name;
    }

    this.state = {
      isFetching: false,
      posterSrc: "",
      error: null,
    };
  }

  render() {
    const { movie } = this.props;
    const { posterSrc, isFetching, error } = this.state;

    const poster = isFetching ? (
      <img className={styles.poster} src={Spinner} alt="Spinner"></img>
    ) : error ? (
      <div className={styles.error}>
        <p>{"Sorry, image is not provided"}</p>
      </div>
    ) : (
      <img className={styles.poster} src={posterSrc} />
    );
    return (
      <div className={styles.card}>
        {poster}
        <div className={styles.textWrapper}>
          <h2>{movie.title}</h2>
          <p>{movie.release_date_text}</p>
          <p>{"Average vote : " + movie.vote_average}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchPoster();
  }

  async fetchPosterAsync() {
    let posterPath = this.props.movie.poster_path;
    let source = "https://image.tmdb.org/t/p/w500";
    let posterUrl = new URL(source + posterPath);

    try {
      this.setState({ ...this.state, isFetching: true });

      const response = await axios.get(posterUrl, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "image/png" });
      this.setState({
        posterSrc: URL.createObjectURL(blob),
        isFetching: false,
      });
    } catch (e) {
      this.setState({
        ...this.state,
        isFetching: false,
        error: e,
      });
    }
  }
  fetchPoster = this.fetchPosterAsync;
}
export default Movie;

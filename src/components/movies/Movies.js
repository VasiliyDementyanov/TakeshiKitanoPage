import React from 'react';
import axios from 'axios'
import styles from './Movies.scss';
import Movie from '../movie/Movie'

class Movies extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const movieElements = this.props.movies.map((movie, index) =>
				<Movie key = {movie.id} movie = {movie}/>)

		return (
			<div className={styles.contentWrapper}>
				<div className={styles.buttonWrapper}>
					<p>New</p>
					<p>Old</p>
					<p>Average vote</p>
				</div>
				<div className={styles.moviesWrapper}>
					{movieElements}
				</div>
			</div>
		)
 	}
}
export default Movies
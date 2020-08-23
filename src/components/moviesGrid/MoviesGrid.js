import React from 'react';
import axios from 'axios'
import styles from './MoviesGrid.scss';
import Movie from '../movie/Movie'

class MoviesGrid extends React.Component {
	constructor(props) {
		super(props)
		
		console.log("MovieGrid constructor")
	}

	render() {
		console.log("MovieGrid render")
		const movieElements = this.props.movies.map((movie, index) =>
				<Movie key = {movie.id} movie = {movie}/>)

		return (
			<div className={styles.contentWrapper}>
				<div className={styles.buttonWrapper}>
					<p onClick={this.props.sortByNew}>New</p>
					<p onClick={this.props.sortByOld}>Old</p>
					<p onClick={this.props.sortByAverageVote}>Average vote</p>
				</div>
				<div className={styles.moviesWrapper}>
					{movieElements}
				</div>
			</div>
		)
	}
}
export default MoviesGrid
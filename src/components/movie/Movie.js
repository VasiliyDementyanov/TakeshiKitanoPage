import React from 'react';
import axios from 'axios'
import styles from './Movie.scss';

import Spinner from './Spinner.svg';

class Movie extends React.Component {
 	constructor(props) {
		super(props)
		
		if(!props.movie.release_date) {
			props.movie.release_date = props.movie.first_air_date;
		}

		const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];
		let d = new Date(props.movie.release_date)
		let day = d.getDate()
		let month = monthNames[d.getMonth()]
		let year = d.getFullYear()
		let textReleaseDate = month.slice(0, 3) + ' ' + day + ', ' + year

		props.movie.release_date = textReleaseDate

		if(!props.movie.title) {
			props.movie.title = props.movie.name
		}

		this.state = {
			isFetching: false,
			posterSrc: '',
			error: null
		}
 	}

 	render() {
		const {movie} = this.props
		const {posterSrc, isFetching, error} = this.state

		const poster = isFetching ?
						<img className = {styles.poster} src={Spinner} alt="Spinner"></img>  :
						error ?
							<div className = {styles.poster}>
								<div className = {styles.error}>
									<p>{error.message}</p>
								</div>
							</div> :
							<img className = {styles.poster} src={posterSrc}/>

		return (
			<div className = {styles.card}>
				{poster}
				<div className = {styles.textWrapper}>
					<h2>{movie.title}</h2>
					<p>{movie.release_date}</p>
					<p>{"Average vote : " + movie.vote_average}</p>
				</div>
			</div>
		)
 	}

 	componentDidMount() {
		this.fetchPoster();
	}

	async fetchPosterAsync() {
		let posterPath = this.props.movie.poster_path
		let source = "https://image.tmdb.org/t/p/w500"
		let posterUrl = new URL(source + posterPath)

		try {
			this.setState({...this.state, isFetching: true});

			const response = await axios.get(posterUrl, {responseType: 'blob'});
			const blob = new Blob([response.data], {type:'image/png'})
			this.setState({
				posterSrc: URL.createObjectURL(blob),
				isFetching: false
			});
		} catch (e) {
			console.log(e, "catch the hoop")
			this.setState({
			...this.state, 
			isFetching: false,
			error: e 
			});
		}
	};
	fetchPoster = this.fetchPosterAsync
}
export default Movie
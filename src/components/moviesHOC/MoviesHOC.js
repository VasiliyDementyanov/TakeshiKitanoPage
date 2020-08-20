import React from 'react';
import axios from 'axios'
import styles from './MoviesHOC.scss';
import Movies from '../movies/Movies'

class MoviesHOC extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movies: [],
			isFetching: false,
			error: null
		}
	}

	render() {
        const { movies, isFetching, error } = this.state

		const body = isFetching ?
						<div className = {styles.message}>
							<p>Data loading...</p>
	 					</div> :
						error ?
							<div className = {styles.message}>
								<p>{error.message}</p>
					 		</div> :
                            <Movies movies = {movies}/>
		return (
            <div>
                {body}
            </div>
		)
 	}

	componentDidMount() {
		this.fetchMovies();
	}

	async fetchMoviesAsync() {
		let apiUrl = 'https://api.themoviedb.org/3/'
		let parameters = 'person/3317/combined_credits?'
		let apiKey = 'api_key=2d25061be0452561bdee3add77a025ce'
		let language = '&language=en-US'
		let url = new URL(apiUrl + parameters + apiKey + language);

        try {
            this.setState({...this.state, isFetching: true});
			const response = await axios.get(url);
            this.setState({
				movies: response.data.crew.filter(movie => movie.department === "Directing"),
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

    fetchMovies = this.fetchMoviesAsync
}
export default MoviesHOC
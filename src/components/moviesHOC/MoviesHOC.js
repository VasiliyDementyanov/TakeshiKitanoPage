import React from 'react';
import axios from 'axios'
import styles from './MoviesHOC.scss';
import MoviesGrid from '../moviesGrid/MoviesGrid'

class MoviesHOC extends React.Component {
	constructor(props) {
		super(props)

		this.sortByNew = 		 this.sortByNew.bind(this)
		this.sortByOld = 		 this.sortByOld.bind(this)
		this.sortByAverageVote = this.sortByAverageVote.bind(this)
		this.state = {
			movies: [],
			isFetching: false,
			error: null
		}
		console.log("MovieHOC constructor")
	}

	render() {
		console.log("MovieHOC render")
		console.dir(this.state.movies)
        const { movies, isFetching, error } = this.state

		const body = isFetching ?
						<div className = {styles.message}>
							<p>Data loading...</p>
	 					</div> :
						error ?
							<div className = {styles.message}>
								<p>{error.message}</p>
					 		</div> :
							<MoviesGrid movies = 			{movies} 
										sortByNew = 		{this.sortByNew}
										sortByOld = 		{this.sortByOld}
										sortByAverageVote = {this.sortByAverageVote}/>
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
	
	dynamicsort(property,order="desc") {
		let sort_order = 1;
		if(order === "desc"){
			sort_order = -1;
		}

		return function (a, b) {

			let valA;
			let valB;
			if(property === "release_date") {
				valA = new Date(a[property])
				valB = new Date(b[property])
			} else {
				valA = a[property]
				valB = b[property]
			}

			if(valA < valB) {
					return -1 * sort_order;
			} else if(valA > valB) {
					return 1 * sort_order;
			} else {
					return 0 * sort_order;
			}
		}
	}

	sortByNew() {
		console.log("SortByNew")
		this.setState({
			movies: this.state.movies.sort(this.dynamicsort("release_date","desc"))
		});
	}

	sortByOld() {
		console.log("SortByOld")
		this.setState({
			movies: this.state.movies.sort(this.dynamicsort("release_date","asc"))
		});
	}

	sortByAverageVote() {
		console.log("SortByAverageVote")
		this.setState({
			movies: this.state.movies.sort(this.dynamicsort("vote_average","desc"))
		});
	}
}
export default MoviesHOC
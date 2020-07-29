import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Movies.scss';
import Movie from '../movie/Movie'

class Movies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			onLinkEntered: false,
			imgSrc: '',
			movies: [],
			isFetching: true,
			error: null
		}
 	}

	componentDidMount() {
    	let url = new URL('https://api.themoviedb.org/3/person/3317/combined_credits?api_key=2d25061be0452561bdee3add77a025ce&language=en-US');
		fetch(url)
			.then((response) => {return response.json()})
			.then((data) => {
				this.setState({
					movies: data.crew.filter(movie => movie.department === "Directing"),
					isFetching: false
				})
				console.log(false)
			})
			.catch((e) => {
				console.log(e, "catch the hoop")
				this.setState({
					data: data.crew.filter(movie => movie.department === "Directing"), 
					isFetching: false, 
					error: e 
				})
			})

		let imgUrl = new URL('https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg')
		fetch(imgUrl)
			.then((response) => {
				return response.blob()
			})
			.then((blob) => {
				console.log(blob)
				this.setState({
					imgSrc: URL.createObjectURL(blob)
				})
			})
			.catch((error) => {
				console.log(error, "catch the hoop in img")
			})

	}

	// componentDidMount() {
// 	console.log('---', 'did mount')
//  }

// componentWillReceiveProps(nextProps) {
// 	console.log('---', 'will receive props')
// }

// componentWillUpdate() {
// 	console.log('---', 'will update')
// }

// componentDidUpdate() {
// 	console.log('---', 'did update')
	// }

 	render() {
		const { movies, isFetching, error } = this.state		
		const body = isFetching ?
								<div>...Loading</div> :
								<Movie movie = {this.state.movies[0]}/>
		//if (error) return <div>{`Error: ${e.message}`}</div>
		console.log(this.state.movies)
		
		
		const sectionStyle = this.state.onLinkEntered ?
											 `${styles.contentWrapper} ${styles.darkBg}` : 
											 `${styles.contentWrapper} ${styles.lightBg}`
		const textStyle = this.state.onLinkEntered ?
										styles.textHovered :
										styles.text

		
		const movieElements = this.state.movies.map((movie, index) =>
				<Movie key = {movie.id} movie = {movie}/>
		)
		return (
			//<div>
			//	{body}
			//</div>
			<div>
		 		{movieElements}
			</div>
		)

//   return(
// 		<section className={sectionStyle}>
// 			<div className={styles.linlWrapper}>
// 				<div onClick={this.onClick}
// 						className={styles.text}>
// 					GET MOVIES
// 				</div>
// 				<img src={this.state.imgSrc}/>
// 			</div>
// 		</section>
// 	);
 	}

 onClick = () => {
	// let url = new URL('https://api.themoviedb.org/3/search/movie?api_key=2d25061be0452561bdee3add77a025ce&language=en-US&query=Avengers&include_adult=true');
	// fetch(url)
	// 	.then((response) => {
	// 		return response.json()
	// 	})
	// 	.then((data) => {
	// 		console.log(data)
	// 	})
	// 	.catch((error) => {
	// 		console.log(error, "catch the hoop")
	// 	})

	// let imgUrl = new URL('https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg')
	// fetch(imgUrl)
	// 	.then((response) => {
	// 		return response.blob()
	// 	})
	// 	.then((blob) => {
	// 		console.log(blob)
	// 		this.setState({
	// 			imgSrc: URL.createObjectURL(blob)
	// 		})
	// 	})
	// 	.catch((error) => {
	// 		console.log(error, "catch the hoop in img")
	// 	})
 }

 onLinkLeave = () => {
	// this.setState({
	// 	onLinkEntered: false
	// })
	console.log(this.state.onLinkEntered);
 }
}
export default Movies
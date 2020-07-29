import React from 'react';
import styles from './Movie.scss';

class Movie extends React.Component {
 constructor(props) {
		super(props)

		this.state = {
				onLinkEntered: false,
				imgSrc: '',
				movies: []
		}
 }

 componentDidMount() {
	console.log('---', 'will mount')
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
		//poster_path
	let posterPath = this.props.movie.poster_path
	let imgUrl = new URL('https://image.tmdb.org/t/p/w500' + posterPath)
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

 render() {
	const {movie} = this.props
	const style = {width: '50%'}
	//const body = isOpen && <section className="card-text">{article.text}</section>
	return (
		<div className = {styles.card}>
			<img className = {styles.image} src={this.state.imgSrc}/>
			<h4>{movie.title}</h4>
		</div>
	)
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
export default Movie
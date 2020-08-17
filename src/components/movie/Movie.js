import React from 'react';
import styles from './Movie.scss';

class Movie extends React.Component {
 constructor(props) {
		super(props)
		this.state = {
				isFetching: true,
				posterSrc: '',	
		}
 }

 componentDidMount() {
	const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"];
	let d = new Date(this.props.movie.release_date)
	let day = d.getDate()
	let month = monthNames[d.getMonth()]
	let year = d.getFullYear()
	//let textReleaseDate = month + ' ' + day + ', ' + year
	let textReleaseDate = "Jan" + ' ' + day + ', ' + year

	this.props.movie.release_date = textReleaseDate

	let posterPath = this.props.movie.poster_path
	let source = "https://image.tmdb.org/t/p/w500"
	let posterUrl = new URL(source + posterPath)

	fetch(posterUrl)
		.then((response) => {
			return response.blob()
		})
		.then((blob) => {
			this.setState({
				posterSrc: URL.createObjectURL(blob),
				isFetching: false
			})
		})
		.catch((error) => {
			console.log(error, "catch the hoop in img")
		})
	
	}

 render() {
	const {movie} = this.props
	const {posterSrc, isFetching} = this.state

	//const posterStyle = isFetching ?
	//				styles.fakePoster:
	//				styles.poster

	const poster = isFetching ?
					<div className = {styles.fakePoster}/> :
					<img className = {styles.poster} src={posterSrc}/>

	//console.dir(posterStyle)
	//const style = {width: '50%'}
	//const body = isOpen && <section className="card-text">{article.text}</section>
	return (
		<div className = {styles.card}>
			{poster}
			<div className = {styles.textWrapper}>
				<h2>{movie.title}</h2>
				<p>{movie.release_date}</p>
				<p>{movie.vote_average}</p>
			</div>
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
	//console.log(this.state.onLinkEntered);
 }
}
export default Movie
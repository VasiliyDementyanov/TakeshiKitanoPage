import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Biography.scss';

import TakeshiKitano from './TakeshiKitano.jpg';

class Biography extends React.Component {
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

	// componentDidMount() {
    // 	let url = new URL('https://api.themoviedb.org/3/person/3317/combined_credits?api_key=2d25061be0452561bdee3add77a025ce&language=en-US');
	// 	fetch(url)
	// 		.then((response) => {return response.json()})
	// 		.then((data) => {
	// 			this.setState({
	// 				movies: data.crew.filter(movie => movie.department === "Directing"),
	// 				isFetching: false
	// 			})
	// 			console.log(false)
	// 		})
	// 		.catch((e) => {
	// 			console.log(e, "catch the hoop")
	// 			this.setState({
	// 				data: data.crew.filter(movie => movie.department === "Directing"), 
	// 				isFetching: false, 
	// 				error: e 
	// 			})
	// 		})

	// 	let imgUrl = new URL('https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg')
	// 	fetch(imgUrl)
	// 		.then((response) => {
	// 			return response.blob()
	// 		})
	// 		.then((blob) => {
	// 			console.log(blob)
	// 			this.setState({
	// 				imgSrc: URL.createObjectURL(blob)
	// 			})
	// 		})
	// 		.catch((error) => {
	// 			console.log(error, "catch the hoop in img")
	// 		})

	// }

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
		// const { movies, isFetching, error } = this.state		
		// const body = isFetching ?
		// 						<div>...Loading</div> :
		// 						<Movie movie = {this.state.movies[0]}/>
		// //if (error) return <div>{`Error: ${e.message}`}</div>
		// console.log(this.state.movies)
		
		
		// const sectionStyle = this.state.onLinkEntered ?
		// 									 `${styles.contentWrapper} ${styles.darkBg}` : 
		// 									 `${styles.contentWrapper} ${styles.lightBg}`
		// const textStyle = this.state.onLinkEntered ?
		// 								styles.textHovered :
		// 								styles.text

		
		// const movieElements = this.state.movies.map((movie, index) =>
		// 		<Movie key = {movie.id} movie = {movie}/>
		// )
		return (
            <div className="container-fluid"> 
                <div className={styles.row}>
                    <div className={styles.side}>
                        <h1>Takeshi Kitano</h1>
                        <p>is a Japanese comedian, television presenter, 
                            actor, filmmaker, and author. 
                            While he is known primarily as a comedian and TV host in his native Japan, 
                            abroad he is better known for his work as a filmmaker. 
                            With the exception of his works as a film director, 
                            he is known almost exclusively by the stage name Beat Takeshi</p>
                        <br/>
                        <p>Kitano rose to prominence in the 1970s as one half of the comedy duo Two Beat, 
                            before going solo and becoming one of the three biggest comedians in the country. 
                            After several small acting roles, 
                            he made his directorial debut with 1989's Violent Cop and garnered international acclaim 
                            for Sonatine (1993). He was not widely accepted as an accomplished director 
                            in Japan until Hana-bi won the Golden Lion in 1997. In October 2017, 
                            Kitano completed his Outrage crime trilogy with the release of Outrage Coda.</p>
                    </div>
                    <div className={styles.main}>
                        <img src={TakeshiKitano} className={styles.img} style={{height:"450px"}} alt="Takeshi Kitano"/>
                    </div>
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
	console.log(this.state.onLinkEntered);
 }
}
export default Biography
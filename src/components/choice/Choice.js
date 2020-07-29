import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Choice.scss';

class Choice extends React.Component {
 constructor(props) {
		super(props)

		this.state = {
				onLinkEntered: false
		}
 }

 render() {
	const sectionStyle = this.state.onLinkEntered ?
											 `${styles.contentWrapper} ${styles.darkBg}` : 
											 `${styles.contentWrapper} ${styles.lightBg}`
	const textStyle = this.state.onLinkEntered ?
										styles.textHovered :
										styles.text

  return(
		<section className={sectionStyle}>
			<div	className={styles.linkWrapper} to='/'>
				<Link className={textStyle} to='/Movies'>MOVIES</Link>
				<Link className={textStyle} to='/Bio'>BIO</Link>
			</div>
		</section>
	);
 }

 onLinkEnter = () => {
	// this.setState({
	// 	onLinkEntered: true
	// })
	console.log(this.state.onLinkEntered);
 }

 onLinkLeave = () => {
	// this.setState({
	// 	onLinkEntered: false
	// })
	console.log(this.state.onLinkEntered);
 }
}
export default Choice
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
			<Link onMouseEnter={this.onLinkEnter} 
						onMouseLeave={this.onLinkLeave} 
						className={styles.linkWrapper} 
						to='/' >
				<div className={textStyle}>MOVIES</div>
				<div className={textStyle}>BIO</div>

			</Link>
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
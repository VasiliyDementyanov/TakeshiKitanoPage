import React    from 'react';
import { Link } from 'react-router-dom'
import styles   from './Welcome.scss';

class Welcome extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
				onLinkEntered: false
		}
 }

//  componentWillMount() {
// 	console.log('---', 'will mount')
//  }

//  componentDidMount() {
// 	console.log('---', 'did mount')
//  }

//  componentWillReceiveProps(nextProps) {
// 	console.log('---', 'will receive props')
// }

// componentWillUpdate() {
// 	console.log('---', 'will update')
// }

// componentDidUpdate() {
// 	console.log('---', 'did update')
// }

// shouldComponentUpdate(nextProps, nextState) {
// 	return this.state.isOpen !== nextState.isOpen
// }

	render() {
		// const sectionStyle = this.state.onLinkEntered ?
		// 									 `${styles.contentWrapper} ${styles.darkBg}` : 
		// 									 `${styles.contentWrapper} ${styles.halfDarkBg}`
		// const textStyle = this.state.onLinkEntered ?
		// 								styles.textHovered :
		// 								styles.text

  		return(
			<div class="container">
				<div class="row">
					<div class="col">
						<h1>WELCOME TO<br/>TAKESHI KITANO PAGE</h1>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<p>This page I have created in order to show you my knowledge of React, JavaScript, HTML, CSS.</p>
					</div>
				</div>
			</div>
			// <section>
			// 	<h1>WELCOME TO<br/>TAKESHI KITANO PAGE</h1>
			// 	<p>This page I have created in order to show you my knowledge of React, JavaScript, HTML, CSS.</p>
			// </section>	
			// <section className={sectionStyle}>
			// 	<Link onMouseEnter={this.onLinkEnter} 
			// 		onMouseLeave={this.onLinkLeave} 
			// 		className={styles.linkWrapper} 
			// 		to='/Choice' >
			// 		<div className={textStyle}>Welcome to</div>
			// 		<div className={textStyle}>ようこそ</div>
			// 		<div className={textStyle}>Takeshi world</div>
			// 		<div className={textStyle}>武の世界</div>
			// 	</Link>
			// </section>
		);
 	}

	onLinkEnter = () => {
		this.setState({
			onLinkEntered: true
		})
 	}

 	onLinkLeave = () => {
		this.setState({
			onLinkEntered: false
		})
 	}
}
export default Welcome
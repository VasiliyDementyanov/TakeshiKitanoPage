import React    from 'react';
import styles   from './Welcome.scss';

class Welcome extends React.Component {
	render() {
  		return (
			<div className={styles.flexContainer}>
				<div>
					<h1>WELCOME TO<br/>TAKESHI KITANO PAGE</h1>
				</div>
				<div>
					<p>This page I have created in order to show you my knowledge of React, JavaScript, HTML, CSS.</p>
				</div>
			</div>
		);
 	}
}
export default Welcome;
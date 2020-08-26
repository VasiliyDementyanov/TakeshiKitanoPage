import React from 'react';
import text from './text'
import styles from './Biography.scss';

import TakeshiKitano from './TakeshiKitano.jpg';

class Biography extends React.Component {
 	render() {
		return (
			<div className={styles.contentWrapper}>
				<div className={styles.side}>
					<h1>Takeshi Kitano</h1>
					<p>{text.paragraphOne}</p>
					<br/>
					<p>{text.paragraphTwo}</p>
				</div>
				<div className={styles.main}>
					<img src={TakeshiKitano} className={styles.img} alt="Takeshi Kitano"/>
				</div>
			</div>
		)
 	}
}
export default Biography
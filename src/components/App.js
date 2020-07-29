import React 								     from 'react';
import { Router, Route, Switch } 				 from 'react-router-dom';
import history 									 from '../history';

import Welcome 									 from './welcome/Welcome';
import Choice 									 from './choice/Choice';
import Movies 									 from './movies/Movies';

class App extends React.Component {
 render() {
  return(
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Welcome}/>
				<Route exact path="/Choice" component={Choice}/>
				<Route exact path="/Movies" component={Movies}/>
			</Switch>
     </Router>
	);
 }
}
export default App
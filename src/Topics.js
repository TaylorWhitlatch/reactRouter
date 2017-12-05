import React from 'react';
import { Route, Link } from 'react-router-dom';
import Topic from './Topic';


function Topics(){
	return(
		<div>
			<h1>Topics Page</h1>
			<ul>
				<li><Link to="/topics/rendering">Rendering with React</Link></li>
			</ul>
			<Route path='/topics/:topicName' component={Topic} />

		</div>
	)
}

export default Topics;
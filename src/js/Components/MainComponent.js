import React from 'react';
import NavComponent from './Nav';
import ParentComponent from './ParentComponent';

export default class MainComponent extends React.Component {

	render(){
		return (
			<div>
				<NavComponent />
				<ParentComponent />
			</div>
			);
		}
	};

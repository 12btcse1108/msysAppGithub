import React from 'react'
import {Link} from 'react-router-dom';

export default class Nav extends React.Component{

render(){
	return(
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<nav className="navbar navbar-fixed-top navbar-inverse" role="navigation">
						<div className="navbar-header">
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li className="active">
									<Link to="/"> Home </Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>

		);
	}
};

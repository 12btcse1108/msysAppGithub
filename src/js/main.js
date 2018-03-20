import React from 'react'
import ReactDOM from 'react-dom';
import MainComponent from './Components/MainComponent';
import ParentComponent from './Components/ParentComponent';

import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Link, NavLink,BrowserRouter } from 'react-router-dom';

export const history = createHistory();

const AppRouter = () => (
	  <BrowserRouter>
	      <Switch>
	        <Route path="/" component={MainComponent} exact={true} />
	        <Route path="search" component={ParentComponent} exact={true}/>
	      </Switch>
	  </BrowserRouter>
	);

ReactDOM.render(<AppRouter/>,document.getElementById('app'));

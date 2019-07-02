import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import ItemDetails from './ItemDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<React.Fragment>
			<Router>
				<NavBar />
				<Route exact path="/" component={Home} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/shop/:id" component={ItemDetails} />
			</Router>
		</React.Fragment>
	);
}

export default App;

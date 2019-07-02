import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
	const oddEvent = (match, location) => {
		if (!match) {
			return false;
		}
		const eventID = parseInt(match.params.eventID);
		return !isNaN(eventID) && eventID % 2 === 1;
	};

	return (
		<Nav activeKey="/">
			<Nav.Item>
				<NavLink isActive={oddEvent} to="/">
					Home
				</NavLink>
			</Nav.Item>
			<Nav.Item>
				<NavLink isActive={oddEvent} to="/shop">
					Shop
				</NavLink>
			</Nav.Item>
			<Nav.Item>
				<NavLink isActive={oddEvent} to="/contact">
					Contact
				</NavLink>
			</Nav.Item>
		</Nav>
	);
}

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<NavLink to="/" className="navbar-brand">
						UseContext
					</NavLink>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink
								exact
								to="/"
								activeClassName="active"
								className="nav-link"
								aria-current="page"
							>
								Home
							</NavLink>
							<NavLink
								exact
								to="/about"
								activeClassName="active"
								className="nav-link"
							>
								About
							</NavLink>
							<NavLink
								exact
								to="/Login"
								activeClassName="active"
								className="nav-link"
							>
								Login
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

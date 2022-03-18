import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<NavLink to="#" className="navbar-brand">
						UseContext
					</NavLink>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink
								to="home"
								className="nav-link active"
								aria-current="page"
							>
								Home
							</NavLink>
							<NavLink to="about" className="nav-link active">
								About
							</NavLink>
							<NavLink to="login" className="nav-link active">
								Login
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

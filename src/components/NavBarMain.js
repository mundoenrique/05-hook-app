import { Link } from 'react-router-dom';
import { NavBarLink } from '../helpers/toolHelpers';

export default function NavBarMain() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<Link to="" className="navbar-brand">
						React Hooks
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<NavBarLink
									to="use-state"
									className="nav-link dropdown-toggle"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseState
								</NavBarLink>
								<ul className="dropdown-menu">
									<li>
										<NavBarLink
											to={`use-state/counter`}
											className="dropdown-item"
										>
											Counter
										</NavBarLink>
									</li>
									<li>
										<NavBarLink
											to={`use-state/counter-hook`}
											className="dropdown-item"
										>
											Counter Hook
										</NavBarLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavBarLink
									to="use-effect"
									className="nav-link dropdown-toggle"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseEffect
								</NavBarLink>
								<ul className="dropdown-menu">
									<li>
										<NavBarLink
											to={`use-effect/simple-form`}
											className="dropdown-item"
										>
											Simple form
										</NavBarLink>
									</li>
									<li>
										<NavBarLink
											to={`use-effect/hook-form`}
											className="dropdown-item"
										>
											Hook form
										</NavBarLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavBarLink
									to="examples"
									className="nav-link dropdown-toggle"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Examples
								</NavBarLink>
								<ul className="dropdown-menu">
									<li>
										<NavBarLink
											to={`examples/hooks-multiple`}
											className="dropdown-item"
										>
											Hooks multiple
										</NavBarLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavBarLink
									to="use-ref"
									className="nav-link dropdown-toggle"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseRef
								</NavBarLink>
								<ul className="dropdown-menu">
									<li>
										<NavBarLink
											to={`use-ref/focus-screen`}
											className="dropdown-item"
										>
											Focus screen
										</NavBarLink>
									</li>
									<li>
										<NavBarLink
											to={`use-ref/example-ref`}
											className="dropdown-item"
										>
											Example Ref
										</NavBarLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavBarLink
									to="use-layout-effect"
									className="nav-link dropdown-toggle"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseLayoutEffect
								</NavBarLink>
								<ul className="dropdown-menu">
									<li>
										<NavBarLink
											to={`use-layout-effect/example-layout`}
											className="dropdown-item"
										>
											Example layout
										</NavBarLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavBarLink
									to="use-memo"
									className="nav-link dropdown-toggle"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseMemo
								</NavBarLink>
								<ul className="dropdown-menu">
									<li>
										<NavBarLink
											to={`use-memo/memorize`}
											className="dropdown-item"
										>
											Memorize
										</NavBarLink>
									</li>
									<li>
										<NavBarLink
											to={`use-memo/memo-hook`}
											className="dropdown-item"
										>
											Memo hook
										</NavBarLink>
									</li>
									<li>
										<NavBarLink
											to={`use-memo/callback-hook`}
											className="dropdown-item"
										>
											Callbak hook
										</NavBarLink>
									</li>
									<li>
										<NavBarLink
											to={`use-memo/example-memo`}
											className="dropdown-item"
										>
											Example memo
										</NavBarLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavBarLink
									to="use-reducer"
									className="nav-link dropdown-toggle"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseReducer
								</NavBarLink>
								<ul className="dropdown-menu">
									<li>
										<NavBarLink
											to={`use-reducer/example-reducer`}
											className="dropdown-item"
										>
											Example reducer
										</NavBarLink>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavBarLink
									to="use-context"
									className="nav-link dropdown-toggle"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseContex
								</NavBarLink>
								<ul className="dropdown-menu">
									<li>
										<NavBarLink
											to={`use-context/example-contex`}
											className="dropdown-item"
										>
											example contex
										</NavBarLink>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

import { Link, NavLink } from 'react-router-dom';

export default function NavBarMain() {
	const tenant = 'novo';

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<NavLink to={`/${tenant}`} className="navbar-brand">
						React Hooks
					</NavLink>
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
								<NavLink
									to="#"
									className="nav-link dropdown-toggle active"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseState
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<Link
											to={`${tenant}/use-state/counter`}
											className="dropdown-item"
										>
											Counter
										</Link>
									</li>
									<li>
										<Link
											to={`${tenant}/use-state/counter-hook`}
											className="dropdown-item"
										>
											Counter Hook
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavLink
									to="#"
									className="nav-link dropdown-toggle active"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseEffect
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<Link
											to={`${tenant}/use-effect/simple-form`}
											className="dropdown-item"
										>
											Simple form
										</Link>
									</li>
									<li>
										<Link
											to={`${tenant}/use-effect/hook-form`}
											className="dropdown-item"
										>
											Hook form
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavLink
									to="#"
									className="nav-link dropdown-toggle active"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Examples
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<Link
											to={`${tenant}/examples/hooks-multiple`}
											className="dropdown-item"
										>
											Hooks multiple
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavLink
									to="#"
									className="nav-link dropdown-toggle active"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseRef
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<Link
											to={`${tenant}/use-ref/focus-screen`}
											className="dropdown-item"
										>
											Focus screen
										</Link>
									</li>
									<li>
										<Link
											to={`${tenant}/use-ref/example-ref`}
											className="dropdown-item"
										>
											Example Ref
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavLink
									to="#"
									className="nav-link dropdown-toggle active"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseLayoutEffect
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<Link
											to={`${tenant}/use-layout-effect/example-layout`}
											className="dropdown-item"
										>
											Example layout
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavLink
									to="#"
									className="nav-link dropdown-toggle active"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseMemo
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<Link
											to={`${tenant}/use-memo/memorize`}
											className="dropdown-item"
										>
											Memorize
										</Link>
									</li>
									<li>
										<Link
											to={`${tenant}/use-memo/memo-hook`}
											className="dropdown-item"
										>
											Memo hook
										</Link>
									</li>
									<li>
										<Link
											to={`${tenant}/use-memo/callback-hook`}
											className="dropdown-item"
										>
											Callbak hook
										</Link>
									</li>
									<li>
										<Link
											to={`${tenant}/use-memo/example-memo`}
											className="dropdown-item"
										>
											Example memo
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavLink
									to="#"
									className="nav-link dropdown-toggle active"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseReducer
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<Link
											to={`${tenant}/use-reducer/example-reducer`}
											className="dropdown-item"
										>
											Example reducer
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<NavLink
									to="#"
									className="nav-link dropdown-toggle active"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									UseContex
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<Link
											to={`${tenant}/use-context/example-contex`}
											className="dropdown-item"
										>
											example contex
										</Link>
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

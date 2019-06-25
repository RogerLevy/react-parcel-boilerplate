import React from 'react';
import ReactDOM from 'react-dom';
// import ParcelLogo from "../img/parcel-logo.svg";

const Header = () => (
	<header>
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="/">
					{/*<img width="120" src={ParcelLogo} alt=""/>*/}
				</a>
			</div>
		</nav>
	</header>
)

const App = () => (
	<div>
		<Header/>
		<p>asdlkfjhasdlkfjhasldkjfh</p>
	</div>
)

ReactDOM.render( <App/>, document.getElementById('app'));

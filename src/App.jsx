import ReactLogo from './assets/react.svg'; // декларативный стиль показывает что должно отобразиться
// import ReactLogo from './assets/react.svg?react';

export const App = () => { // императивный стиль
	return ( // все остальное декларативный
		<div className="App">
			<header className="App-header">
				{/* <ReactLogo /> */}
				<img src={ReactLogo} className="App-logo" alt="logo" />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p> {new Date().getFullYear()} </p>  /* императивный стиль */
			</header>
		</div>
	);
};

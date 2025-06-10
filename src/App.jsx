import { createElement } from 'react';
import ReactLogo from './assets/react.svg';

export const App = () => {
	return createElement(
		'div',
		{ className: 'App' },
		createElement('header', { className: 'App-header' }),
		createElement('img', {
			src: ReactLogo,
			className: 'App-logo',
			alt: 'logo',
		}),
		createElement(
			'a',
			{
				className: 'App-link',
				href: 'https://reactjs.org',
				target: '_blank',
				rel: 'noopener noreferrer',
			},
			'Learn React',
		),
		createElement('p', null, new Date().getFullYear()),
	);
};

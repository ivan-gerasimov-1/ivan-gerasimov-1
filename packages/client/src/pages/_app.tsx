import type { AppProps } from 'next/app';
import Head from 'next/head';

import './globals.css';

const metadata = {
	title: 'Ivan Gerasimov | Иван Герасимов',
	description:
		'Ivan Gerasimov (Иван Герасимов): Fullstack JavaScript developer',
	keywords:
		'frontend, front-end, front end, developer, upwork, freelance, javascript, js, react, reactjs, vue, vuejs, vue.js, node, node.js, nodejs, angular, angularjs, angular.js, cоздание, сайт, сайтов, веб, разработка, веб-разработка',
};

export function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords} />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default App;

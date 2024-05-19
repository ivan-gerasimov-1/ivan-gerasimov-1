import { Html, Head, Main, NextScript } from 'next/document';

export function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Ivan Gerasimov</title>
				<meta
					name="description"
					content="Ivan Gerasimov (Иван Герасимов): Fullstack JavaScript developer"
				/>
				<meta
					name="keywords"
					content="frontend, front-end, front end, developer, upwork, freelance, javascript, js, react, reactjs, vue, vuejs, vue.js, node, node.js, nodejs, angular, angularjs, angular.js, cоздание, сайт, сайтов, веб, разработка, веб-разработка"
				/>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default Document;

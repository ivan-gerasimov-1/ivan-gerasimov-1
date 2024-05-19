/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
	experimental: {
		turbo: {
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.tsx',
				},
			},
		},
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: '@svgr/webpack',
				},
			],
		});

		return config;
	},
};

export default nextConfig;

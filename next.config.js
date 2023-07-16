/** @type {import('next').NextConfig} */
require("dotenv").config;

const nextConfig = {
	webpack: (config) => {
		config.externals.push({
			"utf-8-validate": "commonjs utf-8-validate",
			bufferutil: "commonjs bufferutil"
		});

		return config;
	},
	async rewrites() {
		return [
			{
				destination: "/auth/dashboard",
				source: "/dashboard"
			}
		];
	},
	reactStrictMode: true,
	env: {
		API_URL: process.env.API_URL,
		SECRET: process.env.SECRET
	}
};

module.exports = nextConfig;

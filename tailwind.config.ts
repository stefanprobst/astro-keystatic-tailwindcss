import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./keystatic.config.@(ts|tsx)", "./src/**/*.@(astro|css|ts|tsx)"],
};

export default config;

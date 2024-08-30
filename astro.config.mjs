import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import react from "@astrojs/react";

export default defineConfig({
	adapter: node({
		mode: "standalone",
	}),
	integrations: [react()],
	output: "hybrid",
	server: {
		host: "127.0.0.1",
		port: 3000,
	},
});

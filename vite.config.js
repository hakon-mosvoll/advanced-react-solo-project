import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/advanced-react-solo-project/",
	plugins: [react()],
	resolve: {
		alias: {
			$svg: resolve("./src/assets/svg"),
		},
	},
});

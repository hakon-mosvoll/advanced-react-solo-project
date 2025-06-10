import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/advanced-react-solo-project/",
	plugins: [react()],
});

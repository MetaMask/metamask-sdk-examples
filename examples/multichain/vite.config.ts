import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: "@metamask/sdk-multichain",
				replacement: "/local_modules/@metamask/sdk-multichain",
			},
		],
	},
});

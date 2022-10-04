import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [laravel(["resources/ts/app.tsx"]), react()],

    resolve: {
        alias: {
            "@": "/resources/ts",
        },
    },
});

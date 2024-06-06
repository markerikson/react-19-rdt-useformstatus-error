import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const base = command === "serve" ? "" : "/recording/test/examples/rdt-react-19/dist/";
  return {
    base,
    plugins: [react()],
    build: {
      sourcemap: true,
    },
  };
});

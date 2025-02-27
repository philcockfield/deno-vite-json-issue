import deno from "@deno/vite-plugin";
import { defineConfig, type Plugin } from "vite";

export default defineConfig({
  root: "./",
  server: { port: 1234 },
  plugins: [deno() as Plugin[]],
});

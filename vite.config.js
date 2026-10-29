import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        help: resolve(import.meta.dirname, "support/index.html"),
        deleteAccount: resolve(import.meta.dirname, "delete-account/index.html"),
        privacyPolicy: resolve(import.meta.dirname, "privacy-policy/index.html"),
        contributionTerms: resolve(import.meta.dirname, "contribution-terms/index.html"),
        communityGuidelines: resolve(import.meta.dirname, "community-guidelines/index.html"),
      },
    },
  },
});

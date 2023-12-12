import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/dictionary-web-app/', // replace 'your-repo-name' with the name of your repository
  build: {
    outDir: 'docs', // GitHub Pages can serve from the 'docs' folder on the master branch
  },
});

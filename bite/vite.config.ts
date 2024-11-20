import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './', // Root is the current directory
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for builds
    emptyOutDir: true,
  },
  server: {
    port: 5173, // Default development server port
  },
});
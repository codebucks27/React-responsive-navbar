import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import browserslistToEsbuild from 'browserslist-to-esbuild';

export default defineConfig(({ command, mode }) => {
  const nodeEnv = mode === 'test' ? 'test' : command === 'build' ? 'production' : 'development';
  // CRA selects NODE_ENV by command, even when a shell value is present.
  process.env.NODE_ENV = nodeEnv;
  const env = loadEnv(mode, process.cwd(), ['REACT_APP_', 'PUBLIC_URL']);
  const publicUrl = env.PUBLIC_URL || '/';
  const base = publicUrl.endsWith('/') ? publicUrl : `${publicUrl}/`;
  const reactEnv = Object.fromEntries(
    Object.entries(env).filter(([key]) => key.startsWith('REACT_APP_')),
  );

  return {
    plugins: [react()],
    base,
    envPrefix: ['VITE_', 'REACT_APP_'],
    // Retain CRA's public environment API without exposing unprefixed values.
    define: {
      'process.env': JSON.stringify({
        ...reactEnv,
        NODE_ENV: nodeEnv,
        PUBLIC_URL: base.slice(0, -1),
      }),
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    },
    build: {
      outDir: 'build',
      target: browserslistToEsbuild(undefined, { env: 'production' }),
    },
    server: { port: 3000 },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/setupTests.js'],
    },
  };
});

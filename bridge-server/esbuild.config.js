import * as esbuild from 'esbuild';
import { chmod } from 'node:fs/promises';

try {
  await esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: 'dist/index.js',
    banner: {
      js: '#!/usr/bin/env node',
    },
    // Bundle everything to ensure local fixes and dependencies are included
    packages: 'bundle', 
  });
  
  await chmod('dist/index.js', 0o755);
  console.log('Build complete: dist/index.js');
} catch (e) {
  console.error('Build failed', e);
  process.exit(1);
}
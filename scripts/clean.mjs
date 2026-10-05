import { rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

for (const name of ['.astro', 'dist']) {
  await rm(path.join(projectRoot, name), { recursive: true, force: true });
}

console.log('Removed generated cache and build output.');

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(projectRoot, 'dist');

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return findHtmlFiles(target);
    return entry.isFile() && entry.name.endsWith('.html') ? [target] : [];
  }));
  return nested.flat();
}

const htmlFiles = await findHtmlFiles(outputRoot);

for (const file of htmlFiles) {
  const directory = path.dirname(file);
  const relativeRoot = path.relative(directory, outputRoot).replaceAll(path.sep, '/');
  const prefix = relativeRoot ? `${relativeRoot}/` : './';
  const source = await readFile(file, 'utf8');
  const portable = source
    .replace(/(\bhref=["'])\/(?!\/)([^"'?#]+\/)(["'])/g, `$1${prefix}$2index.html$3`)
    .replace(/(\bhref=["'])\/(["'])/g, `$1${prefix}index.html$2`)
    .replace(/(\b(?:href|src|action)=["'])\/(?!\/)/g, `$1${prefix}`);
  await writeFile(file, portable, 'utf8');
}

console.log(`Portable paths written to ${htmlFiles.length} HTML files.`);

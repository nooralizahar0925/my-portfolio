import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';

// Serve the same portfolio to visitors and crawlers, with real content present
// before JavaScript runs. React hydrates it to enable the existing interactions.
const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error('The portfolio root placeholder is missing from the built HTML.');
}

const markup = render();
if (!markup.includes('Noor Alizah Afifah R.') || !markup.includes('Solusi Proteksi Mandiri')) {
  throw new Error('The prerendered portfolio is missing its core profile content.');
}

await writeFile(
  new URL('../dist/index.html', import.meta.url),
  template.replace(placeholder, `<div id="root">${markup}</div>`),
);
console.log('Prerendered the complete portfolio into dist/index.html.');

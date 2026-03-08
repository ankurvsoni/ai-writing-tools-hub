import fs from 'fs';
import path from 'path';

const linksPath = path.join(process.cwd(), 'content/data/affiliate-links.json');

function getLinks() {
  return JSON.parse(fs.readFileSync(linksPath, 'utf8'));
}

export function getAffiliateUrlForSlug(slug = '') {
  const links = getLinks();
  const s = slug.toLowerCase();

  if (s.includes('jasper')) return links.jasper;
  if (s.includes('copy-ai') || s.includes('copy')) return links['copy-ai'];
  if (s.includes('writesonic')) return links.writesonic;
  if (s.includes('rytr')) return links.rytr;
  if (s.includes('grammarly')) return links.grammarly;
  if (s.includes('surfer')) return links.surfer;
  if (s.includes('frase')) return links.frase;
  if (s.includes('notion')) return links.notion;
  if (s.includes('chatgpt')) return links.chatgpt;
  if (s.includes('claude')) return links.claude;
  if (s.includes('desk') || s.includes('monitor') || s.includes('standing') || s.includes('chair') || s.includes('mouse') || s.includes('cable') || s.includes('walking-pad')) return links.amazon;

  return links.default;
}

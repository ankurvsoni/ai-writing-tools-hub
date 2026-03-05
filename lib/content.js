import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'content/pages');

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const meta = {};
  let body = raw;
  if (m) {
    m[1].split('\n').forEach((line) => {
      const idx = line.indexOf(':');
      if (idx > -1) {
        const k = line.slice(0, idx).trim();
        const v = line.slice(idx + 1).trim().replace(/^"|"$/g, '');
        meta[k] = v;
      }
    });
    body = raw.slice(m[0].length);
  }
  return { meta, body };
}

function inlineMd(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
}

function mdToHtml(md) {
  const lines = md.split('\n');
  const out = [];
  let inList = false;

  const closeList = () => {
    if (inList) {
      out.push('</ul>');
      inList = false;
    }
  };

  for (const line of lines) {
    const t = line.trim();
    if (!t) {
      closeList();
      continue;
    }
    if (t.startsWith('# ')) {
      closeList();
      out.push(`<h1>${inlineMd(t.slice(2))}</h1>`);
    } else if (t.startsWith('## ')) {
      closeList();
      out.push(`<h2>${inlineMd(t.slice(3))}</h2>`);
    } else if (t.startsWith('### ')) {
      closeList();
      out.push(`<h3>${inlineMd(t.slice(4))}</h3>`);
    } else if (t.startsWith('- ')) {
      if (!inList) {
        out.push('<ul>');
        inList = true;
      }
      out.push(`<li>${inlineMd(t.slice(2))}</li>`);
    } else if (t.startsWith('> ')) {
      closeList();
      out.push(`<blockquote>${inlineMd(t.slice(2))}</blockquote>`);
    } else {
      closeList();
      out.push(`<p>${inlineMd(t)}</p>`);
    }
  }
  closeList();
  return out.join('\n');
}

export function getAllPages() {
  const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.md'));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(pagesDir, file), 'utf8');
    const { meta, body } = parseFrontmatter(raw);
    const slug = meta.slug || file.replace(/\.md$/, '');
    return {
      ...meta,
      slug,
      html: mdToHtml(body),
    };
  });
}

export function getPageBySlug(slug) {
  return getAllPages().find((p) => p.slug === slug);
}

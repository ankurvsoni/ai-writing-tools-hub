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

function isTableLine(line) {
  const t = line.trim();
  return t.includes('|') && t.startsWith('|') && t.endsWith('|');
}

function isTableDivider(line) {
  return /^\|(?:\s*:?-+:?\s*\|)+$/.test(line.trim());
}

function toCells(line) {
  return line
    .trim()
    .slice(1, -1)
    .split('|')
    .map((c) => inlineMd(c.trim()));
}

function renderTable(lines) {
  if (lines.length < 2 || !isTableDivider(lines[1])) return null;
  const head = toCells(lines[0]);
  const rows = lines.slice(2).map(toCells);
  return `<div style="overflow:auto"><table style="width:100%;border-collapse:collapse;margin:14px 0"><thead><tr>${head
    .map((c) => `<th style="text-align:left;padding:10px;border:1px solid #e2e8f0;background:#f8fafc">${c}</th>`)
    .join('')}</tr></thead><tbody>${rows
    .map(
      (r) =>
        `<tr>${r
          .map((c) => `<td style="padding:10px;border:1px solid #e2e8f0">${c}</td>`)
          .join('')}</tr>`
    )
    .join('')}</tbody></table></div>`;
}

function mdToHtml(md) {
  const lines = md.split('\n');
  const out = [];
  let i = 0;
  let inList = false;
  let currentSection = '';

  const closeList = () => {
    if (inList) {
      out.push('</ul>');
      inList = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const t = line.trim();

    if (!t) {
      closeList();
      i += 1;
      continue;
    }

    if (inList && line.startsWith('  ')) {
      const extra = inlineMd(t);
      out[out.length - 1] = out[out.length - 1].replace('</li>', `<br/><span class="li-sub">${extra}</span></li>`);
      i += 1;
      continue;
    }

    // Table block
    if (isTableLine(t)) {
      closeList();
      const block = [];
      while (i < lines.length && isTableLine(lines[i].trim())) {
        block.push(lines[i]);
        i += 1;
      }
      const tableHtml = renderTable(block);
      if (tableHtml) {
        out.push(tableHtml);
        continue;
      }
      // fallback paragraph rendering if malformed
      block.forEach((b) => out.push(`<p>${inlineMd(b.trim())}</p>`));
      continue;
    }

    if (t.startsWith('# ')) {
      closeList();
      out.push(`<h1>${inlineMd(t.slice(2))}</h1>`);
    } else if (t.startsWith('## ')) {
      closeList();
      currentSection = t.slice(3).toLowerCase();
      out.push(`<h2>${inlineMd(t.slice(3))}</h2>`);
    } else if (t.startsWith('### ')) {
      closeList();
      out.push(`<h3>${inlineMd(t.slice(4))}</h3>`);
    } else if (t.startsWith('- ')) {
      if (!inList) {
        out.push(currentSection.includes('top picks') ? '<ul class="topPicks">' : '<ul>');
        inList = true;
      }
      const rawItem = t.slice(2);
      const itemHtml = inlineMd(rawItem);
      out.push(`<li>${itemHtml}</li>`);
    } else if (t.startsWith('> ')) {
      closeList();
      out.push(`<blockquote>${inlineMd(t.slice(2))}</blockquote>`);
    } else {
      closeList();
      out.push(`<p>${inlineMd(t)}</p>`);
    }

    i += 1;
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

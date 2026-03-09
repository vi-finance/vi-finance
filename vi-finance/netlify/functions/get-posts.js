// netlify/functions/get-posts.js
// Legge tutti i file .md da blog/_posts e li restituisce come JSON

const fs = require('fs');
const path = require('path');

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: text };
  const meta = {};
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    else if (!isNaN(val) && val !== '') val = Number(val);
    meta[key] = val;
  });
  return { meta, content: match[2] };
}

function fileToSlug(filename) {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}

exports.handler = async function(event, context) {
  try {
    const postsDir = path.join(process.cwd(), 'blog', '_posts');

    if (!fs.existsSync(postsDir)) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify([])
      };
    }

    const files = fs.readdirSync(postsDir)
      .filter(f => f.endsWith('.md'))
      .sort()
      .reverse();

    const posts = files.map(filename => {
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
      const { meta, content } = parseFrontmatter(raw);
      return { slug: fileToSlug(filename), filename, content, ...meta };
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=60'
      },
      body: JSON.stringify(posts)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};

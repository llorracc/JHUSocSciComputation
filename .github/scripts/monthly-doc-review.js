#!/usr/bin/env node
/**
 * Reads a git diff from stdin and optionally calls OpenAI to summarize
 * documentation changes. Prints "## AI summary\n\n..." to stdout if OPENAI_API_KEY is set.
 * Used by the Monthly doc review workflow.
 */

const fs = require('fs');

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  const diff = fs.readFileSync(0, 'utf8').trim();

  if (!apiKey || diff.length < 50) {
    process.exit(0);
    return;
  }

  const prompt = `You are reviewing documentation for a university HPC/research computing guide (Johns Hopkins, Rockfish cluster). Below is a git diff of changes in the last 30 days. In 2–4 short paragraphs:
1. Summarize what changed (topics, sections, tone).
2. Note any possible inconsistencies, broken references, or outdated details.
3. Suggest one or two concrete improvements if relevant.

Keep the response concise and actionable. Write in Markdown.`;

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a technical documentation reviewer.' },
          { role: 'user', content: `${prompt}\n\n## Diff\n\n\`\`\`\n${diff.slice(0, 12000)}\n\`\`\`` },
        ],
        max_tokens: 800,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('## AI summary\n\n*OpenAI API error:', res.status, err.slice(0, 200), '*');
      process.exit(0);
      return;
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content?.trim() || '';
    if (content) {
      process.stdout.write('## AI summary\n\n' + content);
    }
  } catch (e) {
    process.stderr.write('## AI summary\n\n*Error: ' + e.message + '*\n');
  }
  process.exit(0);
}

main();

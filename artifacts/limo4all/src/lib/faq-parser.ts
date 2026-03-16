export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Extracts FAQ Q&A pairs from the "## Frequently Asked Questions" section
 * of a markdown file. Questions and answers are alternating plain paragraphs
 * (double-newline separated) — no ### heading prefix on questions.
 */
export function extractFAQs(markdown: string): FAQ[] {
  const match = markdown.match(/##\s+Frequently Asked Questions([\s\S]*)/i);
  if (!match) return [];

  const section = match[1];

  // Split into non-empty paragraphs separated by blank lines
  const paragraphs = section
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(
      (p) =>
        p &&
        !p.startsWith('#') &&
        !p.startsWith('-') &&
        !p.startsWith('*') &&
        !p.startsWith('|'),
    );

  const faqs: FAQ[] = [];
  for (let i = 0; i + 1 < paragraphs.length; i += 2) {
    const question = paragraphs[i].replace(/^#+\s*/, '');
    const answer = paragraphs[i + 1].replace(/^#+\s*/, '');
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

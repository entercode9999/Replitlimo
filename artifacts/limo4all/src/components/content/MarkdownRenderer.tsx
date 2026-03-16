import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'wouter';
import type { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  /** If true, the H1 in the markdown is hidden (title already shown in hero) */
  hideH1?: boolean;
}

export function MarkdownRenderer({ content, hideH1 = true }: MarkdownRendererProps) {
  const components: Components = {
    // Hide H1 — it's shown in the ContentPage hero instead
    h1: hideH1
      ? () => null
      : ({ children }) => (
          <h1 className="font-display text-4xl font-bold text-foreground mb-6 mt-0">
            {children}
          </h1>
        ),

    h2: ({ children }) => (
      <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4 pb-2 border-b border-border">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),

    // Internal links → wouter Link; external → regular anchor
    a: ({ href, children }) => {
      if (href && href.startsWith('/')) {
        return (
          <Link href={href} className="text-primary hover:underline font-semibold">
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          className="text-primary hover:underline font-semibold"
          target={href?.startsWith('http') ? '_blank' : undefined}
          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },

    // Testimonials — blockquotes styled as pull-quotes
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-6 border-l-4 border-primary bg-primary/5 py-4 pr-4 rounded-r-sm italic text-foreground/80 font-sans text-base">
        {children}
      </blockquote>
    ),

    // Inline code styled nicely
    code: ({ children, className }) => {
      const isBlock = className?.includes('language-');
      if (isBlock) {
        return (
          <code className="block bg-card border border-border rounded-sm p-4 text-sm font-mono overflow-x-auto">
            {children}
          </code>
        );
      }
      return (
        <code className="bg-card border border-border px-1.5 py-0.5 rounded text-sm font-mono text-primary">
          {children}
        </code>
      );
    },

    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-6 space-y-2 my-4 font-sans text-foreground/80">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-6 space-y-2 my-4 font-sans text-foreground/80">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="font-sans text-foreground/80 leading-relaxed mb-4">
        {children}
      </p>
    ),

    // Strong / em
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),

    em: ({ children }) => (
      <em className="italic text-foreground/70">{children}</em>
    ),

    // Horizontal rule
    hr: () => <hr className="my-8 border-border" />,

    // Tables
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-border text-sm font-sans">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-card text-foreground font-semibold">{children}</thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b border-border hover:bg-muted/30 transition-colors">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="p-3 text-left border-r border-border last:border-r-0">{children}</th>
    ),
    td: ({ children }) => (
      <td className="p-3 border-r border-border last:border-r-0 text-foreground/70">{children}</td>
    ),
  };

  return (
    <div className="max-w-none text-base leading-relaxed">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

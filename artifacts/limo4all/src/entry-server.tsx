import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'wouter';
import { staticLocationHook } from 'wouter/static';
import App from './App';

export function render(url: string) {
  const helmetCtx: Record<string, unknown> = {};

  const html = renderToString(
    <HelmetProvider context={helmetCtx}>
      <Router hook={staticLocationHook(url)}>
        <App />
      </Router>
    </HelmetProvider>,
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const helmet = (helmetCtx as any).helmet;
  return { html, helmet };
}

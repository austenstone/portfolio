import assert from 'node:assert/strict';
import test from 'node:test';

import { handleRequest, shouldServeTerminal, terminalPage } from './terminal.mts';

const originResponse = new Response('<!doctype html>', {
  headers: { 'content-type': 'text/html' },
});

const fetchOrigin = async () => originResponse.clone();

test('serves the terminal page to curl at the site root', async () => {
  const request = new Request('https://austen.info/', {
    headers: { 'user-agent': 'curl/8.7.1' },
  });
  const response = await handleRequest(request, fetchOrigin);

  assert.equal(shouldServeTerminal(request), true);
  assert.equal(response.headers.get('content-type'), 'text/plain; charset=utf-8');
  assert.equal(await response.text(), terminalPage);
});

test('serves the terminal page at the explicit curl endpoint', () => {
  const request = new Request('https://austen.info/curl', {
    headers: { 'user-agent': 'Mozilla/5.0' },
  });

  assert.equal(shouldServeTerminal(request), true);
});

test('passes browser requests through to GitHub Pages', async () => {
  const response = await handleRequest(
    new Request('https://austen.info/', {
      headers: { 'user-agent': 'Mozilla/5.0' },
    }),
    fetchOrigin,
  );

  assert.equal(response.headers.get('content-type'), 'text/html');
});

test('passes requests with the original override through', () => {
  const request = new Request('https://austen.info/', {
    headers: {
      'user-agent': 'curl/8.7.1',
      'x-original': 'true',
    },
  });

  assert.equal(shouldServeTerminal(request), false);
});

test('passes non-root curl requests through', () => {
  const request = new Request('https://austen.info/blog', {
    headers: { 'user-agent': 'curl/8.7.1' },
  });

  assert.equal(shouldServeTerminal(request), false);
});

test('passes HEAD requests through', () => {
  const request = new Request('https://austen.info/', {
    method: 'HEAD',
    headers: { 'user-agent': 'curl/8.7.1' },
  });

  assert.equal(shouldServeTerminal(request), false);
});

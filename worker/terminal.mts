const ESCAPE = '\u001b[';
const reset = `${ESCAPE}0m`;
const bold = `${ESCAPE}1m`;
const dim = `${ESCAPE}2m`;
const cyan = `${ESCAPE}36m`;
const green = `${ESCAPE}32m`;

export const terminalPage = `${dim}~${reset}${bold}${cyan}austenstone${reset}

${bold}Austen Stone${reset}

I work on Actions at GitHub. I build things, and I use a lot of tokens.
Automate everything.

${green}blog${reset}      https://austen.info/blog
${green}projects${reset}  https://austen.info/projects
${green}github${reset}    https://github.com/austenstone
${green}linkedin${reset}  https://www.linkedin.com/in/austenstone/
${green}resume${reset}    https://austen.info/resume

${dim}Get the original HTML:${reset}
curl -H 'X-Original: true' https://austen.info
`;

const isCurl = (request: Request) =>
  request.headers.get('user-agent')?.toLowerCase().includes('curl/') ?? false;

export const shouldServeTerminal = (request: Request) => {
  const { pathname } = new URL(request.url);
  const wantsOriginal = request.headers.get('x-original')?.toLowerCase() === 'true';

  if (request.method !== 'GET' || wantsOriginal) {
    return false;
  }

  return pathname === '/curl' || (pathname === '/' && isCurl(request));
};

type FetchOrigin = (request: Request) => Promise<Response>;

export const handleRequest = async (
  request: Request,
  fetchOrigin: FetchOrigin = fetch,
): Promise<Response> => {
  if (!shouldServeTerminal(request)) {
    return fetchOrigin(request);
  }

  return new Response(terminalPage, {
    headers: {
      'cache-control': 'public, max-age=300',
      'content-type': 'text/plain; charset=utf-8',
      vary: 'User-Agent, X-Original',
    },
  });
};

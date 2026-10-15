import { handleRequest } from './terminal.mjs';

export default {
  fetch: (request: Request) => handleRequest(request),
};

import { webAPIUrl } from './AppSettings';

export interface HttpRequest<REQB> {
  path: string;
}

export interface HttpResponse<RESB> {
  ok: boolean;
  body?: RESB;
}

export const http = async <RESB, REQB = undefined>(
  config: HttpRequest<REQB>,
): Promise<HttpResponse<RESB>> => {
  const request = new Request(`${webAPIUrl}${config.path}`);
  const response = await fetch(request);
  if (response.ok) {
    const body = await response.json();
    return { ok: response.ok, body };
  } else {
    logError(request, response);
    return { ok: response.ok };
  }
};

const logError = async (request: Request, response: Response) => {
  const contentType = response.headers.get('content-type');
  let body: any;
  if (contentType && contentType.indexOf('application/json') !== -1) {
    body = await response.json();
  } else {
    body = await response.text();
  }
  console.error(
    `Error requesting ${request.method}
    ${request.url}`,
    body,
  );
};

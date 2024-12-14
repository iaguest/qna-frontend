export const server = 'https://localhost:44342';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: process.env.Auth0_Domain,
  client_id: process.env.Auth0_ClientId_QandA,
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};

export {};

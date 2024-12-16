export const server = 'https://localhost:44342';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: process.env.REACT_APP_Auth0_Domain as string,
  clientId: process.env.REACT_APP_Auth0_ClientId_QandA as string,
  authorizationParams: {
    redirect_uri: window.location.origin + '/signin-callback',
    scope: 'openid profile QandAAPI email',
    audience: 'https://qanda',
  },
};

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: 'http://localhost:4200/authHandler',
  scope: 'https://www.googleapis.com/auth/calendar',
  clientId: '173061422649-jg6t1571g5bk39fifdkpiesv7uriq66j.apps.googleusercontent.com',
  strictDiscoveryDocumentValidation: false
};

/* import { google } from 'googleapis';

const OAuth = new google.auth.OAuth2(
  process.env.client_id,
  process.env.client_secret,
  process.env.redirect_uris
);

export { OAuth }; */

import { OAuth2Client } from "google-auth-library";
const OAuth = new OAuth2Client(
  process.env.client_id,
  process.env.client_secret,
  process.env.redirect_uris
);
export { OAuth };
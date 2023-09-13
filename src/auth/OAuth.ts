import { OAuth2Client } from "google-auth-library";

const OAuth = new OAuth2Client(
  process.env.client_id,
  process.env.client_secret,
  process.env.redirect_uris
);

export { OAuth };
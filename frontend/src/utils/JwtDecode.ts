import jwt_decode, { JwtHeader, JwtPayload } from "jwt-decode";

export interface DecodedToken extends JwtPayload {
  // Add any custom claims you expect in the JWT payload
  id: string;
}

export function decodeJwtToken(token: string): DecodedToken {
  const decodedToken = jwt_decode<DecodedToken>(token);
  return decodedToken;
}

export function decodeJwtHeader(token: string): JwtHeader {
  return jwt_decode(token, { header: true });
}

import { decodeJwtToken } from "./JwtDecode";

export function ValidateJwtToken(token: string): boolean {
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

  // Set a tolerance for clock skew (in seconds)
  const clockSkewTolerance = 60;

  const decodedToken = decodeJwtToken(token);

  if (!decodedToken.exp || typeof decodedToken.exp !== "number" || !decodedToken.iat || typeof decodedToken.iat !== "number") {
    console.log("Token does not contain valid expiration or issuance time");
    return false;
  }

  // Check if the token is not expired and has not encountered significant clock skew
  const isValidToken = decodedToken.exp >= currentTime - clockSkewTolerance && decodedToken.iat <= currentTime + clockSkewTolerance;

  if (isValidToken) {
    console.log("Token is valid");
    return true;
  }

  console.log("Token is invalid or expired");
  return false;
}

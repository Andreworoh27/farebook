import { ValidateJwtToken } from "./ValidateJwtToken";

export function checkAuthentication(token: string): boolean {
  if (token != null && ValidateJwtToken(token)) {
    return true;
  }
  return false;
}

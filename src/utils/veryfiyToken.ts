import { jwtDecode } from "jwt-decode";

export const veryfiyToken = (
  token: string
): {
  email: string;
  role: string;
  user: string;
} => {
  return jwtDecode(token);
};

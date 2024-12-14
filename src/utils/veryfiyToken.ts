import { jwtDecode } from "jwt-decode";
interface UserPayload {
  email: string;
  role: string;
  user: string;
}

export const veryfiyToken = (
  token: string
): {
  email: string;
  role: string;
  user: string;
} => {
  return jwtDecode(token);
};

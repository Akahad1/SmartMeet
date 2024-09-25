import { ReactNode } from "react";
import {
  logOut,
  TUser,
  useCurrentToken,
} from "../../../redux/fearutes/auth/authSlice";

import { Navigate } from "react-router-dom";
import { veryfiyToken } from "../../../utils/veryfiyToken";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
const ProtectorRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role: string | undefined;
}) => {
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = veryfiyToken(token);
  }
  const useDispatch = useAppDispatch();

  if (role !== undefined && role !== (user as TUser)?.role) {
    useDispatch(logOut());
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectorRoute;

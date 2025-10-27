import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"
import type { JSX } from "react"

interface ProtectedRouteProps{
 children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = Cookies.get("token");

  if (!token){
   return <Navigate to="/" replace />
  }

  return children;
}
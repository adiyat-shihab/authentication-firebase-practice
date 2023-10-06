import { useContext } from "react";
import { AuthContext } from "./AuthProvider.jsx";

export const Dashboard = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  return (
    <>
      <h1>this is shihab</h1>
      <h1>{authContext.userInfo}</h1>
    </>
  );
};

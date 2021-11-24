import { Route } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element, path }) => {
  const user = useSelector((state) => state.AuthSlicer.user);
  return <>{user && <Route path={path} element={element} />}</>;
};
export default PrivateRoute;

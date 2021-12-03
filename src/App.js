import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import Notfound from "./components/Notfound/Notfound";
import { setSigninAuthState } from "./actions/signinAPI";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AuthSlicer.user);
  const loading = useSelector((state) => state.AuthSlicer.loading);

  React.useEffect(() => {
    // console.log("im inside useEffect in App.js 1st")
    dispatch(setSigninAuthState());
    // console.log("im inside useEffect in App.js last")
  }, [dispatch]);

  // console.log("im root appjs")

  if (user === null && loading) {
    return false;
  }

  

  return (
    <div>
      <Router>
        {/* {console.log("im rendering appjs")} */}
        <Routes>
          <Route
            path="/"
            element={user === null ? <Login /> : <Navigate to="home" />}
          />
          <Route
            path="home"
            element={
              user && !loading ? (
                <>
                  <Header />
                  <Home />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Notfound text="the page you requested wasnot found" />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

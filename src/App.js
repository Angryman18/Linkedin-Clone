import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import Notfound from "./components/Notfound/Notfound";
import { setSigninAuthState } from "./actions/signinAPI";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setSigninAuthState());
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="home"
            element={
              <>
                <Header />
                <Home />
              </>
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

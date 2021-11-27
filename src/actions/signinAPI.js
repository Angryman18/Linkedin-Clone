import { signInWithPopup, onAuthStateChanged, signOut } from "@firebase/auth";
import { googleLogin, auth } from "../firebase";
import { authSlicerActions } from "../store/Slicer";

export const signinAPI = () => {
  return () => {
    signInWithPopup(auth, googleLogin);
  };
};

export const setSigninAuthState = () => {
  console.log("this is main func")
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChange is Running 1st")
      dispatch(authSlicerActions.Login(user));
      console.log("onAuthStateChange is Running 2nd")
      // dispatch(authSlicerActions.Loading());
    });
  };
};

export const usersignOut = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(authSlicerActions.Logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

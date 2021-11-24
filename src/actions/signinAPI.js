import { signInWithPopup, onAuthStateChanged, signOut } from "@firebase/auth";
import { googleLogin, auth } from "../firebase";
import { authSlicerActions } from "../store/Slicer";

export const signinAPI = () => {
  return () => {
    signInWithPopup(auth, googleLogin);
  };
};

export const setSigninAuthState = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      dispatch(authSlicerActions.Login(user));
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

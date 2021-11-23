import { signInWithPopup, onAuthStateChanged, signOut } from "@firebase/auth";
import { googleLogin, auth } from "../firebase";
import { authSlicerActions } from "../store/Slicer";

export const signinAPI = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleLogin)
      .then((result) => {
        console.log(result.user);
        // dispatch(authSlicerActions.Login(result.user));
      })
      .catch((error) => {
        alert(error.message);
      });
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
      .then((res) => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

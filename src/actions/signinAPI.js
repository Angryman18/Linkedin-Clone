import { signInWithPopup, onAuthStateChanged, signOut } from "@firebase/auth";
import { googleLogin, auth } from "../firebase";
import { authSlicerActions } from "../store/Slicer";
import { Navigate } from "react-router-dom";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import {
  addDoc,
  Timestamp,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { postActions } from "../store/post-slicer";

export const signinAPI = () => {
  return () => {
    signInWithPopup(auth, googleLogin).catch(() => {
      alert("Failed to Login");
      <Navigate to="/" />;
    });
  };
};

export const setSigninAuthState = () => {
  // console.log("this is main func");
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      // console.log("onAuthStateChange is Running 1st");
      dispatch(authSlicerActions.Login(user));
      // console.log("onAuthStateChange is Running 2nd");
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

export const SharePost = (payload) => {
  return (dispatch) => {
    dispatch(postActions.UploadPercent(0));
    if (!payload.fileType) {
      dispatch(postActions.setLoading({ loading: true, file: false }));
      (async (payload) => {
        const obj = {
          user: {
            email: payload.email,
            name: payload.name,
            avatar: payload.avatar,
            date: Timestamp.now(),
          },
          comments: payload.comments,
          description: payload.description,
          file: null,
          fileType: null,
        };
        const myDb = getFirestore();
        const docRef = collection(myDb, "user");
        const save = await addDoc(docRef, obj);
        dispatch(postActions.setLoading({ loading: false, file: false }));
        console.log("Article Posted without any Media", save);
      })(payload);
      return;
    }

    const storageRef = ref(storage, `${payload.fileType}/${payload.fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, payload.file);
    dispatch(postActions.setLoading({ loading: true, file: true }));
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const { bytesTransferred, totalBytes } = snapshot;
        const progress = (bytesTransferred / totalBytes) * 100;
        dispatch(postActions.UploadPercent(progress));
      },
      () => {
        console.log("Error Uploading File");
        return;
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const obj = {
          user: {
            email: payload.email,
            name: payload.name,
            avatar: payload.avatar,
            date: Timestamp.now(),
          },
          file: downloadURL,
          fileType: payload.fileType,
          comments: payload.comments,
          description: payload.description,
        };
        const myDb = getFirestore();
        const docRef = collection(myDb, "user");
        await addDoc(docRef, obj);
        dispatch(postActions.setLoading({ loading: false, file: false }));
      }
    );
  };
};

export const getPosts = () => {
  return (dispatch) => {
    (async () => {
      const myDB = getFirestore();
      const storage = collection(myDB, "user");
      const q = query(storage, orderBy("user.date", "desc"));
      onSnapshot(q, (snapshot) => {
        const allPost = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(postActions.getPosts(allPost));
      });
    })();
  };
};

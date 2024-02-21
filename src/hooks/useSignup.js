import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login, errors, isPending } from "../redux/features/auth/authSlice";

export function useSignup() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.auth);

  const signup = () => {
    dispatch(isPending(true));
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch(login(user));
        dispatch(isPending(false));
        toast.success("Xush kelibsiz!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        dispatch(errors(errorMessage));
        dispatch(isPending(false));
        toast.error(errorMessage);
      });
  };

  const sign = (displayName, email, password) => {
    dispatch(isPending(true));
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        dispatch(login(userCredential.user));
        dispatch(errors(null));
        dispatch(isPending(false));
        toast.success("ro'yxatdan o'tdingiz!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(isPending(false));
        dispatch(errors(errorMessage));
        toast.error(errorMessage);
      });
  };

  return { signup, sign };
}

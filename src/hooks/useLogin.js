import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import { isPending, login, errors } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

export function useLogin() {
  const dispatch = useDispatch();

  const logins = (email, password) => {
    dispatch(isPending(true));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(login(userCredential.user));
        dispatch(errors(null));
        dispatch(isPending(false));
        toast.success("Xush kelibsiz!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(isPending(false));
        dispatch(errors(errorMessage));
        toast.error(errorMessage);
      });
  };

  return { logins };
}

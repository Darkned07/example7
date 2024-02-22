import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./page/Home";
import HeadPhone from "./page/HeadPhone";
import Speakers from "./page/Speakers";
import Earphones from "./page/Earphones";
import ProductDetail from "./page/ProductDetail";
import ProductSlug from "./page/ProductSlug";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./page/Login";
import Signup from "./page/Signup";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebaseConfig";
import { isAuthReady, login } from "./redux/features/auth/authSlice";
import Checkout from "./page/Checkout";
function App() {
  const [us, setUs] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/headphones",
          element: <HeadPhone />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/earphones",
          element: <Earphones />,
        },
        {
          path: "/product/:slug/:id",
          element: <ProductDetail />,
        },
        {
          path: "/product/:slug",
          element: <ProductSlug />,
        },
        {
          path: "/check",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(isAuthReady());
      setUs(true);
    });
  }, []);

  return (
    (!us && (
      <h2 className="flex justify-center items-center min-h-screen text-[20px] sm:text-[30px]">
        Loading
        <span className="loading loading-spinner loading-md sm:loading-lg"></span>
      </h2>
    )) ||
    (us && <RouterProvider router={routes} />)
  );
}

export default App;

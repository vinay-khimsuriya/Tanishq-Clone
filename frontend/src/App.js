import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./component/Navbar";
import Category from "./component/Category";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Menubar from "./component/Menubar";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { changeIsUserLogin } from "./redux files/headerSlice";
import { addUserLoginData } from "./redux files/userSlice";
import { useEffect } from "react";

function App() {
  const isSignInDisplay = useSelector((store) => store.header.isSignInDisplay);
  const isSignUpDisplay = useSelector((store) => store.header.isSignUpDisplay);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      dispatch(changeIsUserLogin(true));
      dispatch(addUserLoginData(JSON.parse(storedUserData)));
    }
  }, [dispatch]);

  return (
    <div className="App relative">
      <Navbar />
      <Category />
      {isSignInDisplay && <SignIn />}
      {isSignUpDisplay && <SignUp />}
      <Menubar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

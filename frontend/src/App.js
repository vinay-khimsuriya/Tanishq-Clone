import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./component/Navbar";
import Category from "./component/Category";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Menubar from "./component/Menubar";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const isSignInDisplay = useSelector((store) => store.header.isSignInDisplay);
  const isSignUpDisplay = useSelector((store) => store.header.isSignUpDisplay);

  return (
    <div className="App relative">
      <Navbar />
      <Category />
      {isSignInDisplay && <SignIn />}
      {isSignUpDisplay && <SignUp />}
      <Menubar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

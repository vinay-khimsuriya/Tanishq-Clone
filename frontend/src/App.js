import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./component/Navbar";
import ImageCarousal from "./carousal/ImageCarousal";
import Category from "./component/Category";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Menubar from "./component/Menubar";
import SpecialCategory from "./component/SpecialCategory";

function App() {
  const isSignInDisplay = useSelector((store) => store.header.isSignInDisplay);
  const isSignUpDisplay = useSelector((store) => store.header.isSignUpDisplay);

  return (
    <div className="App relative">
      <Navbar />
      <Category />
      {/* <Header /> */}
      <SpecialCategory />
      <ImageCarousal />
      {isSignInDisplay && <SignIn />}
      {isSignUpDisplay && <SignUp />}
      <Menubar />
    </div>
  );
}

export default App;

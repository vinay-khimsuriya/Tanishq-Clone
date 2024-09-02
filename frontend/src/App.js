import "./App.css";
import { Provider } from "react-redux";
import appStore from "./redux files/appStore";
import Navbar from "./component/Navbar";
import ImageCarousal from "./carousal/ImageCarousal";
import Header from "./component/Header";
import Category from "./component/Category";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App relative">
        <Navbar />
        <Category />
        {/* <Header /> */}
        <ImageCarousal />
      </div>
    </Provider>
  );
}

export default App;

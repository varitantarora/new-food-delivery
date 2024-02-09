import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./utlis/UserContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Appstore from "./utlis/Appstore";


function App() {

  // const [userName, setuserName] = useState()

  // useEffect(() => {
  //   const data = {
  //     name: "Hii"
  //   };
  //   setuserName(data.name)
  // }, [])


  return (

    <Provider store={Appstore}>
      {/* <UserContext.Provider value={{ loggedInUser: userName, setuserName }} > */}
        <>
          <Header />
          <Outlet />
          <Footer />
        </>

      {/* </UserContext.Provider> */}
    </Provider>
  );
}

export default App;

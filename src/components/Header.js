import { MAIN_LOGO } from "../utlis/constant.js";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Useonlinestatus from "../utlis/Useonlinestatus.js";
import UserContext from "../utlis/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  //   //import data from useContext hook
  // // const data = useContext(UserContext)
  // // console.log(data)
  // // const dataauser = data.loggedInUser
  // // console.log(dataauser)
  // const { loggedInUser } = useContext(UserContext);
  // // console.log(loggedInUser);
  // //Defaultuser will disply an object therefor we will extract name from it

  //creating online/offline button
  const [networkButton, setnetworkButton] = useState(null);
  const online = Useonlinestatus();
  const statuscheck = () => {
    //console.log("Online status:", online); // Log online status
    online ? setnetworkButton("✅") : setnetworkButton("❌");
  };
  useEffect(() => {
    statuscheck();
  }, [online]);

  //state variable for storing login button value
  // const [loginbtn, setloginbtn] = useState("Login");
  // const LogInOutBtn = () => {
  //   //conditional operator, if loginbtn= login set it to logout, else set it to login
  //   loginbtn === "Login" ? setloginbtn("Logout") : setloginbtn("Login");
  // };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const userData = localStorage.getItem("usersignin");

  useEffect(() => {
    // Check if user data exists in local storage

  console.log("userdata", userData);
    if (userData) {
      setIsLoggedIn(true); // User is logged in
    } 
    else {
      setIsLoggedIn(false); // User is not logged in 
    }
  }, []);


  const handleLogout = () => {
    // Remove user data from local storage
    localStorage.removeItem("userlogindata");
    localStorage.removeItem("usersignin");
    setIsLoggedIn(false); // Set login status to false
  };

  // const handleLogin = () => {
  //   setIsLoggedIn(true); // Set login status to true
  // };


  //useSelector for cart, subscribing to the store using useSelector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="header">
      <div className="image-container">
        <a href="/">
          <img className="logoimg" alt="logo" src={MAIN_LOGO}></img>
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <h4 className="pagebutton"> {networkButton} </h4>
          </li>
          <li>
            <Link to="/" className="pagebutton">
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/About" className="pagebutton">
              About{" "}
            </Link>
            {/* <a href="/About"> About </a>  */}
          </li>
          <li>
            <Link to="/Contact" className="pagebutton">
              Contact{" "}
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="pagebutton">
              🛒 ({cartItems.length})
            </Link>
          </li>
          {/* <li> */}
         
              {isLoggedIn ? ( // Show logout button if user is logged in
             
                <button className="login-button" onClick={handleLogout}>
                Logout
                </button>
              ) : (
                // Show login button if user is not logged in
                <Link to="/Login" className="pagebutton">
                <button className="login-button" 
                >
                   
                  Login
                </button>
                </Link>
              )}

              {/* <button className="login-button" onClick={LogInOutBtn}>
                {" "}
                {loginbtn}
              </button> */}



          {/* </li> */}

          {/* <li className ="defaultuser">
         {loggedInUser}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;

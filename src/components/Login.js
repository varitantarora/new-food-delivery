import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate(); // Initialize useNavigate hook

  //variable created to store all the data inputed by the user
  //local storage initally will be empty but as soon as we keep on feding data to it , all will get stored in this data array that we created usign use state hook
  const [data, setData] = useState([]);

  //variable created to store current info from user
  const [info, setInfo] = useState({
    //create object to input all 3 values
    //name of these feilds is same as that of name of input boxes cuz we want to store the values that we get in the same input box
    name: "",
    email: "",
    password: "",
  });
 
  // console.log(info)

  //to input info from user , 
  const getData = (event) => {

    //we have destructure the value and name, in the field  of name -> name/email/ pw we will store the the values that user will input, 
    const { value, name } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  //function to store info we got from the user
  const addData = (e) => {
    e.preventDefault();
    //console.log(info);

    const { name, email, password } = info;
    if (name === "") {
      alert("Username is required");
    } else if (email === "") {
      alert("Email id is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid Email ID");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 5) {
      alert("Password length should be greater than 5");
    } else {
      console.log("data added successfully");

      //localtroage.setItem(key : "" , value ; "")
      //store data in local storage in string format because local storage takes data in the form of string only
      //the key name is userlogindata
      localStorage.setItem("userlogindata", JSON.stringify([...data, info]));

       // Navigate to sign-in page
       navigate("/LoginSignIn");
       // Clear the form fields     
       setInfo({
         name: "",
         email: "",
         password: "",
        });
    }
  };
  return (
    <div className="loginContainer">
      <h2 className="loginHeading"> SIGN UP </h2>
      <div className="LoginPage">
        <div>
          {/* <label htmlFor="name"> name</label> */}
          <input
            className="loginUsername"
            name="name"
            type="text"
            placeholder="Username"
            // value={info}
            onChange={getData}
          />
        </div>

        <div>
          {/* <label htmlFor="email"> Email </label> */}
          <input
            className="loginUsername"
            name="email"
            type="email"
            placeholder="email"
            // value={info}
            onChange={getData}
          />
        </div>
        <div>
          {/* <label htmlFor="password"> Password </label> */}
          <input
            type="password"
            placeholder="Password"
            className="loginUsername"
            name="password"
            // value={info}
            onChange={getData}
          />
        </div>

        <button className="buttonlogin" onClick={addData}>
          Submit
        </button>
        <div className="signincontainer">
          <p className="signinline">Already have an account? </p>
          <p  > <NavLink path to="/LoginSignIn"
          className="signinbutton"> SIGN IN</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

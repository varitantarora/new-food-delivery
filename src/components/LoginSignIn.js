import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignIn = () => {


const history = useNavigate();

  const [data, setData] = useState([]);

  //variable created to store current info from user
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  //  console.log(info)

  //to input info from user
  const getData = (event) => {
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


    //get data from local storage
    const getUserArr = localStorage.getItem("userlogindata");
    // console.log(getUserArr)                                              

    const { email, password } = info;
    if (email === "") {
      alert("Email id is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid Email ID");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 5) {
      alert("Password length should be greater than 5");
    } else {

        //check if data is present in local storage, if present its lenggth should be there
      if (getUserArr && getUserArr.length) {

        //if data present convert it in object
        const userData = JSON.parse(getUserArr);
       //console.log(userData)

        //filter to check if data matches
       const userLogin =  userData.filter((el, key) => {
        //if we get correct info then it will display the data the data of the user stored in local storage else it will displsy empty object (if pw or username is not correct)
          return el.email === email && el.password === password;
        });
       console.log(userLogin)

        if(userLogin == 0) {

            alert("Invalid credentials !! ")

        }
        else{

      //IF YOUr credentials match go this page
      alert("You are a valid user")
            history("/")

            //store credentials of sign in the local storage as well
            localStorage.setItem("usersignin" ,JSON.stringify(userLogin))
        }
    
      }
    }
  };

  return (
    <div className="loginContainer">
      <h3 className="loginHeading"> SIGN IN </h3>
      <div className="LoginPage">
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
      </div>
    </div>
  );
};

export default LoginSignIn;

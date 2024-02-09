import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const { Component } = props;
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve user sign-in data from local storage
        const signInData = localStorage.getItem("usersignin");
        
        // Check if sign-in data exists
        if (signInData) {
            const userData = JSON.parse(signInData);
            const signEmail = userData.email;
            const signpass = userData.password;

            // Retrieve user login data from local storage
            const loginData = localStorage.getItem("userlogindata");
            
            // Check if login data exists
            if (loginData) {
                const loginUserData = JSON.parse(loginData);
                const loginEmail = loginUserData.email;
                const loginpass = loginUserData.password;

                // Check if the stored credentials match
                if (signEmail === loginEmail && signpass === loginpass) {
                    setAuthenticated(true);
                } else {
                    // If credentials do not match, redirect to login page
                    navigate("/login");
                }
            } else {
                // If no login data is found, redirect to login page
                navigate("/login");
            }
        } else {
            // If no sign-in data is found, redirect to login page
            navigate("/login");
        }
    }, []);

    // Render the Component only if user is authenticated
    return authenticated ? <Component /> : null;
};

export default Protected;

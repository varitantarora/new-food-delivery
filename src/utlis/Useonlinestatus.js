import { useEffect, useState } from "react";

const Useonlinestatus = () => {
// we dont need any input

//boolean value will be returned

//we will use state variable to set our values initial t0 be true i.e initially we have internet connection and set final value to offline when our system does not have internet conection
//we are using boolean values
const [onlineStatus ,  setonlineStatus] = useState(true);

//we will use UseEffect cuz we want to add  our event listener only once, our dependency array will be empty

 useEffect (() => {
    //event listener will be added in this
    //event listner used = https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event
    window.addEventListener("offline", () => {
        setonlineStatus (false);
    })

    window.addEventListener("online", () => {
        setonlineStatus (true);
    });

 } , [] );

 // we need to return internet status online/ offline thats why we are returning state variable as a boolean value
    return onlineStatus;
}

export default Useonlinestatus;

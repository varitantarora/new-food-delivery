import { createContext } from "react"

const UserContext= createContext(
{
    loggedInUser : "Welcome default"
}
);
export default UserContext;
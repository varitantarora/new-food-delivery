import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError ();
    console.log(err)
    return (
<div>
    <h2>OOPSS something went wrong</h2>
    <h3> {err.status} :  </h3>
    <h3> {err.statusText} </h3>
</div>
    )
 }
 export default Error;
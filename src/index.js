import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Body from "./components/Body";
import Protected from "./components/Protected";
import Login from "./components/Login";
import LoginSignIn from "./components/LoginSignIn";
import Menu from "./components/Menu";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/About",
        element: <Protected Component = {About}/>,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant",
        element: <Body />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/LoginSignIn",
        element: <LoginSignIn />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      // dynamic routing to open menu page for each restaurant
      {
        path: "/restaurant/:id",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();

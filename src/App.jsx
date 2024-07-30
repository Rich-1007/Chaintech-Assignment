import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditProfile from "./Pages/EditProfile";
import Login from "./Pages/Login";
// import NavBar from "./Pages/NavBar";
import Registration from "./Pages/Registration";
import Layout from "./Pages/Layout";

// import './App.css'

const router = createBrowserRouter([
  {
    path: "/", // Setting the root path
    element: <Layout />, // Rendering the Layout component at the root path

    children: [
      {
        path: "/", // Setting the path for the Login component

        element: <Login />, // Rendering the Login component at the root path
      },
      {
        path: "/registration", // Setting the path for the Registration component

        element: <Registration />, // Rendering the Registration component at the /registration path
      },
      {
        path: "/editprofile", // Setting the path for the EditProfile component

        element: <EditProfile />, // Rendering the EditProfile component at the /editprofile path
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
    //The RouterProvider component provides the routing context for the application
  );
}

export default App;

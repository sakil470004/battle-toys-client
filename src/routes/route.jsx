import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../pages/AddToy/AddToy";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/addtoy',
          element: <AddToy />
        },
        {
          path: '/alltoys',
          element: <AllToys />
        },
        {
          path: '/mytoys',
          element: <MyToys />
        },
  
  
      ]
    },
  ]);
  export default router
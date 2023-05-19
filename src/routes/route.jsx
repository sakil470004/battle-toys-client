import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../pages/AddToy/AddToy";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
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
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/addtoy',
        element: <PrivateRoute> <AddToy /></PrivateRoute>
      },
      {
        path: '/alltoys',
        element: <AllToys />
      },
      {
        path: '/mytoys',
        element: <PrivateRoute> <MyToys /></PrivateRoute>,
      },
      {
        path: '/updateToys/:id',
        element: <PrivateRoute> <UpdateToy /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/singleToy/${params.id}`)
      },


    ]
  },
]);
export default router
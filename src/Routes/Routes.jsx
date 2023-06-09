import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import ManageItems from "../pages/DashBoard/ManageItems/ManageItems";
import AdminRoutes from "./AdminRoutes";
import Payment from "../pages/DashBoard/Payment/Payment";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import AdminHome from "../pages/DashBoard/AdminHome/AdminHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: "/secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path:'userhome',
        element:<UserHome></UserHome>
      },
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      // admin routes
      {
        path:'adminhome',
        element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: 'allusers',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: 'addItem',
        element:<AdminRoutes><AddItem></AddItem></AdminRoutes>
      },
      {
        path:'manageItems',
        element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      }
    ]
  }
]);
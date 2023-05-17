import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import AllToys from "../Pages/AlllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import Login from "../Shared/LoginAndRegister/Login";
import Register from "../Shared/LoginAndRegister/Register";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";


const router = createBrowserRouter([
    {
        path: '/',
        element :<Main></Main>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allToys',
                element : <AllToys></AllToys>
            },
            {
                path: '/addToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/login',
                element : <Login></Login>
            }
            ,
            {
                path: '/register',
                element : <Register></Register>
            }

        ]
    }
])



export default router
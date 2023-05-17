import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import AllToys from "../Pages/AlllToys/AllToys";


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
            }
        ]
    }
])



export default router
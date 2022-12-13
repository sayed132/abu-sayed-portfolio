import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Shared/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact-me',
                element: <Contact></Contact>
            }
            
        ]
    }


])

export default router;
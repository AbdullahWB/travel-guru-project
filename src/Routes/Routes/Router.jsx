import Main from "../../Layout/Main";

import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Details from "../../Pages/Home/Details/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:3000/categories/${params.id}`)
            }
        ]
    }
])

export default router;
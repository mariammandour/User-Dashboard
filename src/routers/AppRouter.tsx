
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "@layouts/index";
import Error from "@pages/Error";
import User from "@pages/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <User />
            }
        ]
    }
])

export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

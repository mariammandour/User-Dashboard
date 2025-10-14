
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "@layouts/index";
import Error from "@pages/Error";
import Home from "@pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])

export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

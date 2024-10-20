import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Home/NotFound";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/home", element: <Home /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

import HomeLayout from "@/layouts/HomeLayout";
import AllBook from "@/pages/AllBook/AllBook";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: AllBook },
      { path: "/books", Component: AllBook },
    ],
  },
]);

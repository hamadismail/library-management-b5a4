import HomeLayout from "@/layouts/HomeLayout";
import AddBook from "@/pages/AddBook/AddBook";
import AllBook from "@/pages/AllBook/AllBook";
import BookDetails from "@/pages/BookDetails/BookDetails";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: AllBook },
      { path: "books/:id", Component: BookDetails },
      { path: "create-book", Component: AddBook },
      { path: "borrow-summary", Component: BorrowSummary },
    ],
  },
]);

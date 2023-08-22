import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "./constants";

import { Layout } from "./Layout";

import { NotFound } from "./pages/NotFound";
import { Books } from "./pages/Books";
import { BookItem } from "./pages/BookItem";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <h1>Home Page</h1>,
      },
      {
        path: routes.books,
        element: <Books />,
      },
      {
        path: routes.bookItem,
        element: <BookItem />,
      },
    ],
  },
]);

// const jsxRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path={routes.home} element={<App />} errorElement={<NotFound />}>
//       <Route index element={<h1>Home Page</h1>} />
//       <Route path={routes.books} element={<h1>Books Page</h1>} />
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

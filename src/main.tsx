import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./components/shared/MainLayout.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "./css/tailwind.css";
import Welcome from "./components/Welcome.tsx";
import CaseManagement from "./components/CaseManagement.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/case_management",
        element:<CaseManagement />
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

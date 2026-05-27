import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProfilesPage from "./pages/ProfilesPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFound.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
  },
  {
    path: "/profiles/:profileId",
    element: <ProfilePage/>
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

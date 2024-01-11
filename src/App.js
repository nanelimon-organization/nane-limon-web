import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "./layout/Navbar/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import PresentationPage from "./pages/PresentationsPage/PresentationsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CommunityEvents from "./pages/CommunityEvents/CommunityEvents";
import DonatePage from "./pages/DonatePage/DonatePage";
import FieldsPage from "./pages/WorkingFields/FieldsPage";
import HomePage, { homeLoader } from "./pages/HomePage/HomePage";
import Main from "./pages/MainPage";
import MemberDetail from "./pages/MemberDetail/MemberDetail";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          loader: homeLoader,
        },
        { path: "/:memberDetail", element: <MemberDetail /> },
        { path: "/fields", element: <FieldsPage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/presentations", element: <PresentationPage /> },
        { path: "/communityevents", element: <CommunityEvents /> },
        { path: "/donate", element: <DonatePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

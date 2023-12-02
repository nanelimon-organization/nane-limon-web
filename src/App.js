import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "./layout/Navbar/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import PresentationPage from "./pages/PresentationsPage/PresentationsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CommunityEvents from "./pages/CommunityEvents/CommunityEvents";
import DonatePage from "./pages/DonatePage/DonatePage";
import FieldsPage from "./pages/WorkingFields/FieldsPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/fields", element: <FieldsPage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/presentations", element: <PresentationPage /> },
        { path: "/aboutus", element: <AboutPage /> },
        { path: "/communityevents", element: <CommunityEvents /> },
        { path: "/donate", element: <DonatePage /> },
       
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

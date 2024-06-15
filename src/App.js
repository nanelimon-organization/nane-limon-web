import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "./layout/Navbar/Navbar";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import PresentationPage from "./pages/PresentationsPage/PresentationsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CommunityEvents from "./pages/CommunityEvents/CommunityEvents";
import DonatePage from "./pages/DonatePage/DonatePage";
import FieldsPage from "./pages/WorkingFields/FieldsPage";
import HomePage from "./pages/HomePage/HomePage";
import Main from "./pages/MainPage";
import MemberDetail from "./pages/MemberDetail/MemberDetail";
import { useEffect } from "react";
function App() {

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        document.title = 'Bekliyorum';
      } else {
        document.title = 'Nane & Limon';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          //loader: homeLoader,
        },
        { path: "/member/:memberDetail", element: <MemberDetail /> },
        { path: "/fields", element: <FieldsPage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/presentations", element: <PresentationPage /> },
        { path: "/events", element: <CommunityEvents /> },
        { path: "/donate", element: <DonatePage /> },
        {
          path: "/error",
          element: <ErrorPage />,
        },
        {
          path: "*",
          element: <Navigate to="/error" />,
        }

      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

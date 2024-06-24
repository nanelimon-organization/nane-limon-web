import React, { useEffect, useRef, useState } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import CommunityEvents from "./pages/CommunityEvents/CommunityEvents";
import HomePage from "./pages/HomePage/HomePage";
import Main from "./pages/MainPage";
import MemberDetail from "./pages/MemberDetail/MemberDetail";
import Loading from "./layout/Loading/Loading";
import { LoadingProvider, useLoading } from "./contexts/LoadingContext";

const MainApp = () => {
  const { loading } = useLoading();



  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        document.title = "Bekliyorum";
      } else {
        document.title = "Nane & Limon";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const homeRef = useRef(null);
  const teamRef = useRef(null);
  const projectsRef = useRef(null);
  const eventsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const offset = -100;
    let element = null;

    if (section === "home") element = homeRef.current;
    if (section === "team") element = teamRef.current;
    if (section === "projects") element = projectsRef.current;
    if (section === "events") element = eventsRef.current;
    if (section === "contact") element = contactRef.current;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main scrollToSection={scrollToSection} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <HomePage
              refs={{ homeRef, teamRef, projectsRef, eventsRef, contactRef }}
              scrollToSection={scrollToSection}

            />
          ),
        },
        { path: "/member/:memberDetail", element: <MemberDetail /> },
        { path: "/events", element: <CommunityEvents /> },
        {
          path: "/error",
          element: <ErrorPage />,
        },
        {
          path: "*",
          element: <Navigate to="/error" />,
        },
      ],
    },
  ]);

  return (
    <>
      {loading && <Loading />}
      <RouterProvider router={router} />
    </>
  );
};

function App() {
  return (
    <LoadingProvider>
      <MainApp />
    </LoadingProvider>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import "./MainPage.css";
import { useEffect, useState } from "react";
import ChatBox from "../layout/Chatbot/ChatBox";
import { Divider } from "@mui/material";
function Main({ scrollToSection }) {
 
  const [sticky, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const offset = window.scrollY;
    if (offset > windowHeight * 0.9) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>

      <div className="app-container">

        <Navbar sticky={sticky} scrollToSection={scrollToSection} />

        <main>
          <Outlet />

        </main>
        <Divider sx={{ bgcolor: "green",borderWidth:1}} />

        <Footer scrollToSection={scrollToSection} />
      </div>
      <ChatBox />

    </>
  );
}

export default Main;

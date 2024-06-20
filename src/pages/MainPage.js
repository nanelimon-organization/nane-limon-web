import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import "./MainPage.css"
import { useEffect, useState } from "react";
import ChatBox from "../layout/Chatbot/ChatBox";
function Main({scrollToSection}){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    

      const [sticky,setSticky] = useState(false)

      useEffect(()=>{
        window.addEventListener('scroll',()=>{
          window.scrollY > 800 ? setSticky(true) : setSticky(false)
        })
      },[])

    return <>

      <div className="app-container">

        <Navbar sticky={sticky} scrollToSection={scrollToSection}  />
        
        <main>
       
            <Outlet />

        </main>

        <Footer />

        </div>
        <ChatBox />

    </>
}

export default Main;


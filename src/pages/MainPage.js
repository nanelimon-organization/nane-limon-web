import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import "./MainPage.css"
import { useEffect } from "react";
function Main(){

    
    return <>
      <div className="app-container">

        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
        </div>

    </>
}

export default Main;


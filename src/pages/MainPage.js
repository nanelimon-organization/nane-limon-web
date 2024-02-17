import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import { useEffect } from "react";
function Main(){

    
    return <>
  
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />

    </>
}

export default Main;
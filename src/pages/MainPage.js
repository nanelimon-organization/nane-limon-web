

import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import { Box } from "@mui/material";
import Footer from "../layout/Footer/Footer";
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
import { Outlet } from "react-router-dom";
import Navbar from "../../layout/Navbar/Navbar";

function Main(){
    return <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
}

export default Main;
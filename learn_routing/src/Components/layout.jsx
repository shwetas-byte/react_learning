import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export function Layout(){
    return(
        <>
            <Navbar/>
            <Outlet/>
            <footer>
                <h1>Footer Section</h1>
            </footer>
        </>
    )
}
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import { useRef } from "react";

export default function Layout(){
    const myRef = useRef(null);
    return(
        <>
        <div className = "container" ref = {myRef}>
                <NavigationBar className = "Navbar"></NavigationBar>
                <Outlet/>
        </div>
        </>
    )
}
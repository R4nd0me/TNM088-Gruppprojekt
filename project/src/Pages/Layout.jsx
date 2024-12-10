import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import ReturnButton from "../ReturnButton";
import { useRef } from "react";
import MooDeng from "../MooDengState";


export default function Layout(){
    const myRef = useRef(null);
    return(
        <>        
        <div className = "container" ref = {myRef}>
                <div className = "background">
                    <MooDeng></MooDeng>
                </div>
                <NavigationBar className = "Navbar"></NavigationBar>
                <ReturnButton></ReturnButton>
                <Outlet/>
        </div>
        </>
    )
}
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import ReturnButton from "../ReturnButton";
import { useRef } from "react";
import bakgrund from "../assets/Moodeng/Defaultroom.svg";

/*
        <svg className = "Bakgrund">
            <img href={bakgrund} alt=""/>
        </svg>
*/



export default function Layout(){
    const myRef = useRef(null);
    return(
        <>        
        <div className = "container" ref = {myRef}>
                <NavigationBar className = "Navbar"></NavigationBar>
                <ReturnButton></ReturnButton>
                <Outlet/>
        </div>

        </>
    )
}
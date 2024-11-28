import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import ReturnButton from "../ReturnButton";
import { useRef } from "react";
import bakgrund from "../assets/Moodeng/Defaultroom.svg";




export default function Layout(){
    const myRef = useRef(null);
    return(
        <>        
        <div className = "Bakgrund">
            <img src={bakgrund} alt=""/>
        </div>
        <div className = "container" ref = {myRef}>
                <NavigationBar className = "Navbar"></NavigationBar>
                <ReturnButton></ReturnButton>
                <Outlet/>
        </div>

        </>
    )
}
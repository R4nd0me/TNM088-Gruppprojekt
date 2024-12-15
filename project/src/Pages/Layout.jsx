import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import ReturnButton from "../ReturnButton";
import { useRef } from "react";
import MooDeng from "../MooDengState";
import { IconButton } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import { colors } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useState } from "react";
function Information(){
    const [visibility, setVisibility] = useState(false);
    return (
        <Link to ='/info'>
            <div className="info">
                <IconButton><HelpIcon sx = {{fontSize:40,color:"azure"}}></HelpIcon></IconButton>
            </div>
        </Link>
    )
}


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
                <Information></Information>
                <Outlet/>
        </div>
        </>
    )
}
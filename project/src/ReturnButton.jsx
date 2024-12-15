import { useLocation, useNavigate} from "react-router-dom"
import {IconButton } from "@mui/material";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function ReturnButton(){
    let navigate = useNavigate();
    let {pathname} = useLocation();
    console.log(pathname);

    if (pathname != '/'){
    return (
        <div className = 'return'>
            <IconButton size = 'large' onClick={() => {navigate('/')}}><KeyboardReturnIcon sx = {{fontSize: 40}}></KeyboardReturnIcon></IconButton>
        </div>
    )
    }
}
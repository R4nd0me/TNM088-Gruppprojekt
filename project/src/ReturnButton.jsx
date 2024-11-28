import { useLocation, useNavigate} from "react-router-dom"

export default function ReturnButton(){
    let navigate = useNavigate();
    let {pathname} = useLocation();
    console.log(pathname);

    if (pathname != '/'){
    return (
        <div className = 'return'>
            <button type ='button' onClick={() => {navigate('/')}}>Return</button>
        </div>
    )
    }
}
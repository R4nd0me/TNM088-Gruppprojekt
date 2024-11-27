import {useEffect, useState} from 'react';
import TaskDisplay from './TaskDisplay.jsx'
import NavigationBar from './NavigationBar.jsx'
import { Link } from 'react-router-dom';


export default function HomePage(){
    return(
        <div className='container'>
        <TaskDisplay></TaskDisplay>
        <NavigationBar className = "Navbar"></NavigationBar>
        </div>
    )
}

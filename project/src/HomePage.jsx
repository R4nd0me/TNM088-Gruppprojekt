import {useEffect, useState} from 'react';
import TaskDisplay from './TaskDisplay.jsx'
import NavigationBar from './NavigationBar.jsx'
import { Link } from 'react-router-dom';
import React from "react";
import "./App.css";
import sortTasks from './TaskPriority.jsx'
import MooDengState from './MooDengState.jsx'


export default function HomePage(){
    return(
        <>
        <TaskDisplay></TaskDisplay>
        </>
    )
}

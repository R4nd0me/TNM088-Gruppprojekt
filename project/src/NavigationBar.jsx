import {useState, useEffect} from 'react'
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
export default function NavigationBar(){

    const navigate = useNavigate();
    return (
        <div className="navbar">
            <Link to = '/settings'>
            <IconButton aria-label='Settings'><SettingsIcon sx = {{fontSize:40}}></SettingsIcon></IconButton>
            </Link>
            <Link to = '/new'>
            <IconButton aria-label='New'><AddCircleIcon sx = {{fontSize:40}}></AddCircleIcon></IconButton>
            </Link>
            <Link to = '/viewtasks'>
            <IconButton aria-label='View'><AssignmentIcon sx = {{fontSize:40}}></AssignmentIcon></IconButton>
            </Link>
        </div>
    )
}
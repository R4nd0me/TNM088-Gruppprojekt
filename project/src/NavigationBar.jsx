import {useState, useEffect} from 'react'
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NavigationBar(){

    const navigate = useNavigate();
    return (
        <div className="navbar">
            <Link to = '/settings'>
            <IconButton aria-label='Settings' size = 'large'><SettingsIcon></SettingsIcon></IconButton>
            </Link>
            <Link to = '/new'>
            <button type = "button">New</button>
            </Link>
            <Link to = '/viewtasks'>
            <button type = "button">See Tasks</button>
            </Link>
        </div>
    )
}
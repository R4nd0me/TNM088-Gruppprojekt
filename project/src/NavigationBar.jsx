import {useState, useEffect} from 'react'
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


export default function NavigationBar(){

    const navigate = useNavigate();
    return (
        <div className="navbar">
            <Link to = '/settings'>
            <button type = "button">Settings</button>
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
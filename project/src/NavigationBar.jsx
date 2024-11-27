import {useState, useEffect} from 'react'
import React from 'react';
import {Link} from 'react-router-dom';


export default function NavigationBar(){

    return (
        <div className="navbar">
            <Link to = '/settings'>
            <button type = "button">Settings</button>
            </Link>
            <button type = "button">New</button>
            <button type = "button">See Tasks</button>
            <button type = "button">Return</button>
        </div>
    )
}
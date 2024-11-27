import {useState, useEffect} from 'react'
import React from 'react';
import {Link} from 'react-router-dom';

function SettingsComp(){

    return (
        <Link to = "/settings/">
        <button type = "button">Settings</button>
        </Link>
    )
}

export default function NavigationBar(){

    return (
        <div className="navbar">
            <SettingsComp></SettingsComp>
            <button type = "button">New</button>
            <button type = "button">See Tasks</button>
            <button type = "button">Return</button>
        </div>
    )
}
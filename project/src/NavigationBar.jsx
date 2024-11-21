import {useState, useEffect} from 'react'
import React from 'react';

function settingsFunc(){
    console.log("Hello");
}

export default function NavigationBar(){

    return (
        <div className="navbar">
            <button type = "button">Settings</button>
            <button type = "button">New</button>
            <button type = "button">See Tasks</button>
            <button type = "button">Return</button>
        </div>
    )
}
import React from 'react'
import './App.css'
import NavigationBar from './NavigationBar.jsx'
import HomePage from './HomePage.jsx'
import TaskDisplay from './TaskDisplay.jsx'


export default function App(){

  return(
    <div className='container'>
      <TaskDisplay></TaskDisplay>
      <NavigationBar className = "Navbar"></NavigationBar>

    </div>
  )
}

import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import HomePage from './HomePage.jsx'
import SettingsPage from './Pages/SettingsPage.jsx';
import Layout from './Pages/Layout.jsx';
import NewTask from './Pages/NewTask.jsx';
import ViewTasks from './Pages/viewTasks.jsx';


export default function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout></Layout>}>
        <Route index element = {<HomePage></HomePage>}></Route>
        <Route path = "settings" element = {<SettingsPage></SettingsPage>}></Route>
        <Route path = "new" element = {<NewTask></NewTask>}></Route>
        <Route path = "viewtasks" element = {<ViewTasks></ViewTasks>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

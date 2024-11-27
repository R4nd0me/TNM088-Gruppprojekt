import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import HomePage from './HomePage.jsx'
import SettingsPage from './Pages/SettingsPage.jsx';
import Layout from './Pages/Layout.jsx';


export default function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout></Layout>}>
        <Route index element = {<HomePage></HomePage>}></Route>
        <Route path = "settings" element = {<SettingsPage></SettingsPage>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

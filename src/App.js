import React from "react";
import Nav from "./components/nav/Nav"
import { Routes, Route } from "react-router-dom"
import Card from "./components/card/Card"
import Profile from "./components/profile/Profile"
import Skills from "./components/skills/Skills.jsx"
import Experiences from "../src/components/experiences/Experiences"
import SocialMedia from "../src/components/Social_media/SocialMedia";
import References from "./components/references/References"
import stlApp from "./App.module.css"

function App() {
  return (
    <div className={stlApp.appContainer}>
      <meta http-equiv="refresh" content="0; URL='https://vvidalsi.github.io/Inicio'" />
      <div>
        <Nav />
        <Card />
      </div>
      <Routes>
        {/* <Route path='/Inicio' element={<Card />} /> */}
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Experiences' element={<Experiences />} />
        <Route path='/References' element={<References />} />
      </Routes>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;

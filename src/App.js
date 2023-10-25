import "./App.css";
import React from "react";
import Navbar from "./components/reference/Navbar.js";
import LandingPage from "./components/pages/LandingPage.js";
import { Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services.js";

function App() {
  return (
    // {/* <MainNavigation/>  */}
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/new-meetup" element={<Services />}></Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import TopNavigation from "./components/navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <TopNavigation />
      <Home />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;

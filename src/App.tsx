import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import TopNavigation from "./components/navbar";

function App() {
  return (
    <>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;

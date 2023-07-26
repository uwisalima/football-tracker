import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";

function App() {

  useEffect(() => {
    document.documentElement.classList.add("bg-gray-900");
  }, []);


  return (
    <div className="text-gray-400">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistics/:id" element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;

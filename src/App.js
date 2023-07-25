import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  useEffect(() => {
    document.documentElement.classList.add("bg-gray-900");
  }, []);


  return (
    <div className="text-gray-400">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

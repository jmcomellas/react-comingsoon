import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="flex h-screen w-screen bg-gray-100">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;

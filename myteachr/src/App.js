import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import Classes from "./components/Classes";
import List from "./components/List";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <List />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
      <Footer />

    </div>
  );
}
export default App;

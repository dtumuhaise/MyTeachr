import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import Store from "./components/Store";
import List from "./components/List";
import Footer from "./components/Footer";
// import Events from "./components/Events";


const App = () => {
  return (
    <div>
      <List />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/store" element={<Store />} />
        {/* <Route path="/teacher/:id" component={TeacherProfile} /> */}
      </Routes>
      <Footer />

    </div>
  );
}
export default App;

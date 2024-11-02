import "./App.css";
import React from "react";
import Discover from "./components/Discover/Discover.jsx";
import Event from "./components/Event Desc/Event.jsx";
import SocietyDesc from "./components/Society Description/SocietyDesc.jsx";

const App = () => {
  return (
    <div>
      <Discover />
      <Event />
      <SocietyDesc />
    </div>
  );
};

export default App;

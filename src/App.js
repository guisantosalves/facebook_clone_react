import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* app body */}
      <div className="app__body">
        <SideBar />
        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;

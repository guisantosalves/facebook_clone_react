import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* app body */}
      <div className="app__body">
        <SideBar />
        
        <Feed />
        
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;

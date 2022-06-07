import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";

function App() {
  const user = null;

  // !user -> verifying the user

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />

          {/* app body */}
          <div className="app__body">
            <SideBar />

            <Feed />

            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

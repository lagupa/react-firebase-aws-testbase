import React from "react";
import Auth from "./components/Auth";
import Request from "./components/Request";
import Header from "./components/Header";
import ListTutorial from "./components/ListTutorial";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Auth />
      <Request />
      <Header />
      <ListTutorial />
    </div>
  );
}

export default App;

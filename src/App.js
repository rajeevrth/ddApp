import React from "react";
import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;

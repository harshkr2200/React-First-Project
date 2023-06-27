import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Home from "./components/Home";
import Error from "./components/Error";
import Github from "./components/Github";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/service" Component={Service} />
        <Route path="/contact" Component={Contact} />
        <Route path="/github" Component={Github} />
        <Route Component={Error} />
      </Switch>
    </>
  );
};

export default App;

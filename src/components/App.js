import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Layout></Layout>
    </Router>
  );
};

export default App;

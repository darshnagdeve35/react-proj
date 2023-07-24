import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./header";
import Footer from "./Footer";
import Note from "./Note";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header></Header>
    <Note></Note>
    <Footer></Footer>
  </React.StrictMode>
);

import "./index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </>
  </React.StrictMode>
);
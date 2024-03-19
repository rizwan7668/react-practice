import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./signup/Signup";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path= "/" element = {<App />}/>
      <Route path= "/Login" element = {<Login />}/>
      <Route path= "/Signup" element = {<Signup />}/>
    </Routes>
  </BrowserRouter>
)
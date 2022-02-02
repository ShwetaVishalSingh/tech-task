import { useState } from "react";
import React from 'react';
import  './App.css';
import LoginForm from "./components/login/LoginForm";

function App() {

  return (
    <div className="App">
      <header className="Tech-Task-Login-App">
       <LoginForm/>
      </header>
    </div>
  );
}



export default App;

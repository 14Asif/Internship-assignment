import * as React from "react";
import FirstPage from "./components/FirstPage";

import { Routes, Route } from "react-router-dom";

import SecondPage from "./components/SecondPage";



export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/info" element={<SecondPage />}></Route>
      </Routes>
    </>
  );
}


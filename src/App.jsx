import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;

import React from "react";
import Forgot from "./Forgot";
import LoginPage from "./LoginPage";
import NeedBloodForm from "./NeedBlood";
import Newuser from "./NewUser";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="home" element={<NeedBloodForm />} />
        <Route path="Forgot" element={<Forgot />} />
        <Route path="Newuser" element={<Newuser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Contract, Work } from "./pages";

const App = () => {
  return (
    <div className=" font-main xl:p-main lg:p-main md:p-main p-[2rem]">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Work />} />
            <Route path="about" element={<About />} />
            <Route path="contract" element={<Contract />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

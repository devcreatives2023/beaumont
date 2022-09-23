import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Category, Contract, Work } from "./pages";

const App = () => {
  return (
    <AnimatePresence>

    <div className=" font-main xl:p-main lg:p-main md:p-main p-[2rem]">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Work />} />
            <Route path="about" element={<About />} />
            <Route path="contract" element={<Contract />} />
            <Route path="category" element={<Category />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </AnimatePresence>
  );
};

export default App;

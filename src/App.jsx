import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import IntroPostShimmer from "./shimmers/IntroPostShimmer";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      {/* <IntroPostShimmer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

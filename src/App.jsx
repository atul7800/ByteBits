import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import IntroPostShimmer from "./shimmers/IntroPostShimmer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      {/* <IntroPostShimmer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;

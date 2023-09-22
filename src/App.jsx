import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import WasteGeneration from "./components/WasteGeneration";
import Recycling from "./components/Recycling";
import Awareness from "./components/Awareness";
import Community from "./components/Community";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/waste-generation" element={<WasteGeneration />} />
        <Route path="/recycling" element={<Recycling />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

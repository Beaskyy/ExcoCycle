import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import WasteGeneration from "./components/WasteGeneration";
import Recycling from "./components/Recycling";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/waste-generation" element={<WasteGeneration />} />
        <Route path="/recycling" element={<Recycling />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

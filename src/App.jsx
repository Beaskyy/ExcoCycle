import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import WasteGeneration from "./components/WasteGeneration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/waste-generation" element={<WasteGeneration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

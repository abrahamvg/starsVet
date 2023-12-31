import "./App.css";

import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Birds from "./pages/species/Birds";
import Rabbit from "./pages/species/Rabbit";
import Reptile from "./pages/species/Reptile";
import GuineaPig from "./pages/species/GuineaPig";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/species">
            <Route path="birds" element={<Birds />}/>
            <Route path="rabbit" element={<Rabbit />} />
            <Route path="reptile" element={<Reptile />} />
            <Route path="guineaPig" element={<GuineaPig />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

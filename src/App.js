import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rabbit from "./pages/species/Rabbit";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/species">
            <Route path="rabbit" element={<Rabbit />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

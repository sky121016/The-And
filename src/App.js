import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import Nav from "./components/common/Nav";
import TripHome from "./pages/TripHome";
import Rules from "./pages/Rules";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip" element={<TripHome />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
        <Nav></Nav>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import Nav from "./components/common/Nav";
import TripHome from "./pages/TripHome";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip" element={<TripHome />} />
        </Routes>
      </BrowserRouter>
      <Nav></Nav>
    </div>
  );
}

export default App;

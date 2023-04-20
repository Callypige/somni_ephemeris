import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import ListDreams from "./Components/ListDreams/ListDreams";
import AddDreams from "./Components/AddDreams/AddDreams";
import BasicMenu from "./Components/BasicMenu/BasicMenu";

// import DisplayDreams from "./Components/DisplayDreams/Displaydreams";

function App() {
  return (
    <Router>
      <BasicMenu />

      <Routes>
        <Route path="/" element={<ListDreams />} />
        <Route path="/add" element={<AddDreams />} />
      </Routes>
    </Router>
  );
}


export default App;

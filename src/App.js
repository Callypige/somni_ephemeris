import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import ListDreams from "./Components/ListDreams/ListDreams";
import AddDreams from "./Components/AddDreams/AddDreams";
// import DisplayDreams from "./Components/DisplayDreams/Displaydreams";

function App() {
  return (
    <Router>
      <Sidebar />

      <Routes>
        <Route path="/" element={<ListDreams />} />
        <Route path="/add" element={<AddDreams />} />
      </Routes>
    </Router>
  );
}
    // <Router>
    //     <Routes>
    //       <Route path="/" component={ListDreams} />
    //       <Route path="/add" component={AddDreams} />
    //       <Route path="/showdream" component={DisplayDreams} />
    //     </Routes>
    // </Router>


export default App;

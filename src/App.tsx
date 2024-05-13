
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";
import Contact from "./components/contact/contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

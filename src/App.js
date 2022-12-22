import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="h-full bg-black text-slate-200">
      <BrowserRouter>
      <Navbar/>

      <div className="h-screen">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/project" element={<Projects/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        
      </Routes>
      </div>
      </BrowserRouter>


    </div>
  );
}

export default App;

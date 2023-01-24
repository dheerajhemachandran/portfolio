import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="text-slate-200 flex flex-col justify-center">
      <BrowserRouter>
      <Navbar/>
      <div className="h-screen">
        
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/project" element={<Projects/>}/>
        <Route  path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
      </BrowserRouter>


    </div>
  );
}

export default App;

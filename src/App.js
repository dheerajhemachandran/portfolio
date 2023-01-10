import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { projects } from "./data/ProjectData";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectDisplay from "./pages/ProjectDisplay";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="text-slate-200">
      <BrowserRouter>
      <Navbar/>

      <div className="h-screen">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/project" element={<Projects/>}/>
        <Route  path="/contact" element={<Contact/>}/>
      {projects.map((project)=>{
        return (<Route path={project.link} element={<ProjectDisplay project={project}/>}/>)
      })}
      </Routes>
      </div>
      </BrowserRouter>


    </div>
  );
}

export default App;

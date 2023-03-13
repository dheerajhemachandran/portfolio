import Navbar from './component/Navbar';
import About from './section/About';
import Contact from './section/Contact';
import Home from './section/Home';
import Projects from './section/Projects';
import Skills from './section/Skills';
import { useState } from 'react';
import Snake from './section/Snake';

function App() {
  const [section, setsection] = useState("home")
  const [dark, setdark] = useState(true)
  return (
    <div className={dark?"dark":""}>
    <div className="bg-slate-200 dark:bg-[#121212]">
      <Navbar section={section} dark={dark} setdark={setdark}/>
      <Home setsection={setsection}/>
      <About setsection={setsection}/>
      {/* <Snake setsection={setsection}/> */}
      <Skills  setsection={setsection}/>
      <Projects  setsection={setsection}/>
      <Contact  setsection={setsection}/>
    </div>
    </div>
  );
}

export default App;

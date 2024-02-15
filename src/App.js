import { useEffect } from 'react';
import './App.css';
import Contact from './Sections/Contact';
import Drawings from './Sections/Drawings';
import Footer from './Sections/Footer';
import Header from './Sections/Header';
import Home from './Sections/Home';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';
import Aos from 'aos'
import 'aos/dist/aos.css'
import About from './Sections/About';

function App() {
  useEffect(()=>{
    Aos.init({duration: 2000});
},[])
  return (
    <>
    <Header />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Drawings />
    <Contact />
    <Footer />
    </>
  );
}

export default App;

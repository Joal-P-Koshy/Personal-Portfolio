import './App.css';
import Contact from './Sections/Contact';
import Drawings from './Sections/Drawings';
import Footer from './Sections/Footer';
import Header from './Sections/Header';
import Home from './Sections/Home';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';

function App() {
  return (
    <>
    <Header />
    <Home />
    <Skills />
    <Projects />
    <Drawings />
    <Contact />
    <Footer />
    </>
  );
}

export default App;

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import ScrollToTop from "react-scroll-to-top";

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop style={{borderRadius:'50px',backgroundColor:'#696969'}} smooth color="white" />
    
    </>
  )
}

export default App

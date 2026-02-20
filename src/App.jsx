import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { useState } from "react"

function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? "dark" : "light"}>
      <Navbar toggleTheme={() => setDark(!dark)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

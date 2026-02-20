export default function Navbar({ toggleTheme }) {
  return (
    <nav className="navbar">
      <h2 className="gradient-text">Muhammad Suleman</h2>
      <div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme} className="btn">Toggle Theme</button>
      </div>
    </nav>
  )
}

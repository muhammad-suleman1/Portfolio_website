export default function Projects() {
  return (
    <section id="projects">
      <h2 className="gradient-text">DevOps Projects</h2>
      <div className="project-grid">
        <div className="card">
          <h3>CI/CD Automation Pipeline</h3>
          <p>Implemented GitHub Actions workflow for automated build, test, and AWS deployment.</p>
        </div>
        <div className="card">
          <h3>Dockerized Flask REST API</h3>
          <p>Containerized application ensuring consistent dev-to-prod environments.</p>
        </div>
        <div className="card">
          <h3>Linux Monitoring & Automation</h3>
          <p>Developed Bash & Python scripts for system health monitoring and log analysis.</p>
        </div>
      </div>
    </section>
  )
}

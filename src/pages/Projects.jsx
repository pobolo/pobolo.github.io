



export default function Projects() {
  const projects = [
    { title: "Project One", description: "A cool web app I built", link: "#" },
    { title: "Project Two", description: "Another awesome project", link: "#" },
  ];

  return (
    <div className="page">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link}>View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}
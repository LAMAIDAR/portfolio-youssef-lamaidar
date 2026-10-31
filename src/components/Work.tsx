import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    name: "Smart Attack Detection",
    category: "Projet académique · SIEM",
    tools: "Python, Java/Spring, React, Ollama, Isolation Forest",
    variant: "security",
  },
  {
    name: "Diabetes Monitoring App",
    category: "Application mobile",
    tools: "Dart, Flutter, machine learning",
    variant: "health",
  },
  {
    name: "Java Management Application",
    category: "Gestion de bibliothèque, école et restaurant",
    tools: "Java",
    variant: "java",
  },
  {
    name: "Project Management Platform",
    category: "Application web",
    tools: "PHP, Laravel, Tailwind CSS",
    variant: "web",
  },
  {
    name: "Motorola 6809 Software",
    category: "Programmation assembleur",
    tools: "Motorola 6809 Assembly",
    variant: "assembly",
  },
  {
    name: "Industrial Network Infrastructure",
    category: "Configuration réseau",
    tools: "Cisco Packet Tracer",
    variant: "network",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Mes <span>projets</span>
        </h2>
        <div className="work-flex">
          {projects.map(({ name, category, tools, variant }, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{name}</h4>
                    <p>{category}</p>
                  </div>
                </div>
                <h4>Technologies utilisées</h4>
                <p>{tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={name} variant={variant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

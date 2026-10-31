import "./styles/Career.css";

const milestones = [
  {
    role: "Master — Ingénierie logicielle",
    organization: "FST Settat · Morocco",
    period: "2025–2027",
    description:
      "Formation avancée en architecture logicielle, systèmes distribués, ingénierie des données et intelligence artificielle appliquée.",
  },
  {
    role: "Stage — Ingénierie logicielle",
    organization: "HypeePay · Paris, France",
    period: "2025",
    description:
      "Développement d’une application de suivi de santé avec un backend .NET, une interface Vue.js et un modèle Random Forest.",
  },
  {
    role: "Licence — Informatique",
    organization: "FST Settat · Morocco",
    period: "2024–2025",
    description:
      "Bases solides en algorithmique, développement logiciel, bases de données et systèmes informatiques.",
  },
  {
    role: "Stage — Services informatiques",
    organization: "CTT · Managem Group · Marrakech",
    period: "2024",
    description:
      "Participation aux opérations informatiques et découverte des exigences d’un environnement de production.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Formation <span>&</span>
          <br /> expérience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {milestones.map(({ role, organization, period, description }) => (
            <div className="career-info-box" key={role}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{role}</h4>
                  <h5>{organization}</h5>
                </div>
                <h3>{period}</h3>
              </div>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Bonjour, je suis</h2>
            <h1>
              LAMAIDAR
              <br />
              <span>YOUSSEF</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Étudiant en Master</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Ingénierie</div>
              <div className="landing-h2-2">logicielle</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Données & IA</div>
              <div className="landing-h2-info-1">Innovation</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

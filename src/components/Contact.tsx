import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:yousseflamaidar17@gmail.com" data-cursor="disable">
                yousseflamaidar17@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+212633325657" data-cursor="disable">
                0633 325 657
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Réseaux professionnels</h4>
            <a
              href="https://github.com/LAMAIDAR/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/lamaidar-youssef-b3a929353/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio <br /> de <span>Youssef Lamaidar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

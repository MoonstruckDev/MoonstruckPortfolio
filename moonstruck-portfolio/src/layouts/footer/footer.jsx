import './footer.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import GitHub icon from brands package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className="footer">
    <ul className="footer__list">
      <li className="footer__link">
        <a className="footer__link--icon" aria-label='Link to my github' href="https://github.com/MoonstruckDev" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> {/* Use faGithub icon */}
        </a>
      </li>
      <li className="footer__link">
        <a className="footer__link--icon" aria-label='Link to my mail' href="mailto:dev@moonstruck.pro">
          <FontAwesomeIcon icon={faEnvelope} /> {/* Use faEnvelope icon */}
        </a>
      </li>
    </ul>
    <h2 className="footer__license">
      MoonstruckDev © 2023 by MoonstruckSpirit<br /> is licensed under CC BY-NC 4.0
    </h2>
  </footer>
);

export default Footer;

import './footer.scss';

const Footer = () => (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__link">
          <a href="https://github.com/MoonstruckDev" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
        <li className="footer__link">
          <a href="mailto:your@email.com">Email</a>
        </li>
      </ul>
      <h2 className="footer__license">
        MoonstruckDev © 2023 by MoonstruckSpirit<br /> is licensed under CC BY-NC 4.0
      </h2>
    </footer>
  );
  
  export default Footer;
  
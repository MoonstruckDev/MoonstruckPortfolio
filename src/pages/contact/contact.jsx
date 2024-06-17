// IMPORTS
import { Link } from 'react-router-dom';
import './contact.scss';
import linkedinIcon from '../../assets/images/contact/linkedin_icon.avif';

function Contact() {
   return (
      <section className='contact'>
         <div className='contact__card'>
            <div className='contact__header'>
               <img className='contact__avatar' src={linkedinIcon} alt='Profile Avatar' />
               <h2 className='contact__name'>Luc Smith</h2>
               <p className='contact__headline'>React Web Developper</p>
            </div>
            <div className='contact__body'>
               <p className='contact__bio'>
                  Front-end developer with a passion for creating beautiful and functional websites. Specializing in front-end development with React & Sass. Always looking for new projects to work on, so feel free to reach out to me if you have any questions or need help with a project.
               </p>
               <div className='contact__cta'>
                  <a href='https://www.linkedin.com/in/luc-smith-62a4b52a6/' className='contact__button' target='_blank' rel='noopener noreferrer'>
                     View Profile
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contact;

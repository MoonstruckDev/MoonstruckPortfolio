// IMPORTS
import './home.scss'
import linkedinIcon from '../../assets/images/contact/linkedin_icon.avif';
import MountainRange from '../../assets/images/homepage/mountain_range.avif'
import OpenClassroomsLogo from '../../assets/images/homepage/logo_OC.avif'
import { ReactComponent as CssBadge } from '../../assets/badges/css_badge.svg';
import { ReactComponent as HtmlBadge } from '../../assets/badges/html_badge.svg';
import { ReactComponent as ReactBadge } from '../../assets/badges/react_badge.svg';
import { ReactComponent as ReduxBadge } from '../../assets/badges/redux_badge.svg';
import { ReactComponent as JavascriptBadge } from '../../assets/badges/javascript_badge.svg';
import { ReactComponent as SassBadge } from '../../assets/badges/sass_badge.svg';
import { ReactComponent as GithubBadge } from '../../assets/badges/github_badge.svg';
import { Link } from 'react-router-dom';

// Home page
function Home() {
   return (
      <>
      <section className='hero__header'>
         <img src={MountainRange} className='hero__header--image' alt="Mountain Range - Pexels" />
         <h1 className='hero__header--title kalam-home'>Portfolio</h1>
      </section>
      <section className="introduction">
         <h2 className="introduction__title kalam-home">Hi, I'm MoonstruckDev!</h2>
         <p className="introduction__text">I'm a full stack developer with a passion for creating beautiful and functional websites. I specialize in front-end development with React & Sass. Ever since I was a kid I enjoyed anything tech related so when I got my first laptop in break time I would make very basic websites with just HTML, that was fun to me and altough they weren't pretty this ignited a lifelong passion in web dev! So it was an obvious choice for me to get officially recognized as a web developper so I chose to do my studies with Openclassrooms.<br /><br />I'm always looking for new projects to work on, so feel free to reach out to me if you have any questions or need help with a project.</p>

      </section>
      <div className="wrapper">
         <div class="divider div-transparent div-arrow-down"></div>
      </div>
      <section className="skills">
         <h2 className="skills__title kalam-home">My Skills</h2>
         <div className='skills__badges'>
            <CssBadge />
            <HtmlBadge />
            <ReactBadge />
            <ReduxBadge />
            <JavascriptBadge />
            <SassBadge />
            <GithubBadge />
         </div>
      </section>
      <div className="wrapper">
         <div class="divider div-transparent div-arrow-down"></div>
      </div>
      <section className="certifications">
         <img src={OpenClassroomsLogo} alt="OpenClassrooms Logo" className="certifications__school" />
         <h3 className="certifications__text kalam-home">Intégrateur Web - 2023 / 2024</h3>
         <p className="certification__text--extra">"Associate's Degree / BAC +2"</p>
      </section>
      </>
   )
}
 
 export default Home
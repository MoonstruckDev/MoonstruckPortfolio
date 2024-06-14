// IMPORTS
import './home.scss'
import { Link } from 'react-router-dom'


// Home page
function Home() {
   return (
      <section>
         <h1>Homepage</h1>
         <Link to="/error" className='LinkError'>Error Page</Link>
         <Link to="/projects" className='Projects'>Projects Page</Link>
      </section>
   )
 }
 
 export default Home
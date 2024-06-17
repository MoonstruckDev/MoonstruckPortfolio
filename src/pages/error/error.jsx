// IMPORTS
import { Link } from 'react-router-dom'
import './error.scss' 



// Page error 404
function Error() {
   return (
      <section className='error'>
         <h1 className='error__title'>Page Not Found</h1>
         <Link to="/" className='error__link'>Go Back</Link>
         <p className='error__code'>404</p>

      </section>
   )
 }
 
 export default Error
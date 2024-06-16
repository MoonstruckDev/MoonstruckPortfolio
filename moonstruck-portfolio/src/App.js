// IMPORTS
// importing the react router 
import {Routes, Route} from 'react-router-dom';
import Header from './layouts/header/header';

// PAGES
import Home from './pages/home/home';
import Error from './pages/error/error.jsx';
import Projects from './pages/projects/projects.jsx';
import Contact from './pages/contact/contact.jsx';

import './styles/fonts.scss';
import Footer from './layouts/footer/footer.jsx';

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

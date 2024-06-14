// IMPORTS
// importing the react router 
import {Routes, Route} from 'react-router-dom';
import Header from './layouts/header/header';

// PAGES
import Home from './pages/home/home';
import Error from './pages/error/error';
import Projects from './pages/projects/projects';
import './styles/fonts.scss';

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import TeachingPage from './pages/TeachingPage';
import MaterialPage from './pages/MaterialPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/material" element={<MaterialPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

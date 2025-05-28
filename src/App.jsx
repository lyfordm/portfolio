import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import './styles/global.css';
import './styles/projectDetail.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
import { Link } from 'react-router';
import projects from '../data/projectsData';

export default function Portfolio() {
  return (
    <section id="portfolio" className="fade-in">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div 
                className="portfolio-image"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link 
                  to={`/projects/${project.id}`} 
                  className="portfolio-link"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
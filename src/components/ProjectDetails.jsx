import {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import projectsData from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(project => project.id === id);

    // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="container">Project not found</div>;
  }

  const handleBackClick = () => {
    navigate('/#portfolio');
  };

  return (
    <div className="project-detail-page">

   
    <div className="project-detail container">
      <header className="project-header">
        <div className="header-row">
          <div
            onClick={handleBackClick}
            className="back-button"
          >
            ← Back to Home
          </div>
          <h1>{project.title}</h1>
        </div>
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
      </header>

      <div className="project-content">
        <section className="project-section">
          <h2>The Problem</h2>
          <p>{project.problem}</p>
        </section>

        <section className="project-section">
          <h2>The Client</h2>
          <p>{project.client}</p>
          {project.clientDetails && (
            <div className="client-details">
              <ul>
                {project.clientDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section className="project-section">
          <h2>The Solution</h2>
          <p>{project.solution}</p>
          {project.solutionPoints && (
            <ul className="solution-points">
              {project.solutionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </section>

        <section className="project-section">
          <h2>Tools & Technologies</h2>
          <div className="tools-grid">
            {project.tools.map((tool, index) => (
              <div key={index} className="tool-card">
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="project-gallery">
          <h2>Project Gallery</h2>
          <div className="gallery-grid">
            {project.images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image.url} 
                  alt={image.alt || `Project screenshot ${index + 1}`} 
                  loading="lazy"
                />
                {image.caption && <p className="image-caption">{image.caption}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
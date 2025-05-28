import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import {projectsData} from '../data/projectsData';

export default function Portfolio() {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (projectId) => {
    setLoadedImages(prev => new Set([...prev, projectId]));
  };

  useEffect(() => {
    // Preload images
    projectsData.forEach(project => {
      const img = new Image();
      img.onload = () => handleImageLoad(project.id);
      img.src = project.images[0].url;
    });
  }, []);

  return (
    <section id="portfolio" className="fade-in">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="portfolio-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div 
                className={`portfolio-image ${!loadedImages.has(project.id) ? 'loading' : ''}`}
                style={{ backgroundImage: loadedImages.has(project.id) ? `url(${project.images[0].url})` : 'none' }}
              >
                {!loadedImages.has(project.id) && (
                  <div className="image-loader">
                    <div className="spinner"></div>
                  </div>
                )}
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
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
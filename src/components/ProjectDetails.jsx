import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(project => project.id === id);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageLoad = (imageIndex) => {
    setLoadedImages(prev => new Set([...prev, imageIndex]));
  };

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (!project) {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <h1>🎨</h1>
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="cta-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate('/#portfolio');
  };

  return (
    <div className="project-detail-page">
      <div className="project-detail container">
        <header className="project-header">
          <div className="header-actions">
            <button
              onClick={handleBackClick}
              className="back-button modern-back"
            >
              <span className="back-arrow">←</span>
              <span>Back to Portfolio</span>
            </button>
          </div>
          
          <div className="project-hero">
            <div className="project-badge">
              <span className="badge-dot"></span>
              Featured Project
            </div>
            <h1 className="project-title">{project.title}</h1>
            {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
            
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Client</span>
                <span className="meta-value">{project.client}</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-label">Tools</span>
                <span className="meta-value">{project.tools.length} technologies</span>
              </div>
            </div>
          </div>
        </header>

        <div className="project-content">
          <div className="content-grid">
            <aside className="project-sidebar">
              <div className="sidebar-section">
                <h3>🎯 Challenge</h3>
                <p>{project.problem}</p>
              </div>

              <div className="sidebar-section">
                <h3>👥 Client Details</h3>
                {project.clientDetails && (
                  <ul className="detail-list">
                    {project.clientDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="sidebar-section">
                <h3>🛠️ Tech Stack</h3>
                <div className="tools-stack">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="tech-pill">
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <main className="project-main">
              <section className="solution-section">
                <div className="section-header">
                  <h2>💡 Our Solution</h2>
                  <div className="section-line"></div>
                </div>
                <p className="solution-intro">{project.solution}</p>
                
                {project.solutionPoints && (
                  <div className="solution-grid">
                    {project.solutionPoints.map((point, index) => (
                      <div key={index} className="solution-card">
                        <div className="solution-number">{index + 1}</div>
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <section className="gallery-section">
                <div className="section-header">
                  <h2>🖼️ Project Showcase</h2>
                  <div className="section-line"></div>
                </div>
                
                <div className="masonry-gallery">
                  {project.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`gallery-card ${!loadedImages.has(index) ? 'loading' : ''}`}
                      onClick={() => openLightbox(image, index)}
                    >
                      {!loadedImages.has(index) && (
                        <div className="image-skeleton">
                          <div className="skeleton-shimmer"></div>
                        </div>
                      )}
                      <img 
                        src={image.url} 
                        alt={image.alt || `Project screenshot ${index + 1}`} 
                        loading="lazy"
                        onLoad={() => handleImageLoad(index)}
                        style={{ display: loadedImages.has(index) ? 'block' : 'none' }}
                      />
                      <div className="gallery-overlay">
                        <div className="overlay-content">
                          <span className="zoom-icon">🔍</span>
                          <p className="overlay-caption">Click to enlarge</p>
                        </div>
                      </div>
                      {image.caption && (
                        <div className="image-caption">
                          <p>{image.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={selectedImage.url} alt={selectedImage.alt} />
            {selectedImage.caption && (
              <div className="lightbox-caption">
                <p>{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default function Skills() {
  return (
    <section id="skills" className="fade-in">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive and beautiful user experiences with a focus on user-centered design principles and modern aesthetics.</p>
            <div className="skill-tags">
              <span className="tag">Figma</span>
              <span className="tag">Adobe Creative Suite</span>
              <span className="tag">Sketch</span>
              <span className="tag">Prototyping</span>
              <span className="tag">User Research</span>
            </div>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>Web Development</h3>
            <p>Building responsive, performant websites and web applications using modern technologies and best practices.</p>
            <div className="skill-tags">
              <span className="tag">HTML/CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">Framer</span>
            </div>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">🚀</div>
            <h3>Brand Strategy</h3>
            <p>Developing cohesive brand identities and strategies that resonate with target audiences and drive business growth.</p>
            <div className="skill-tags">
              <span className="tag">Brand Identity</span>
              <span className="tag">Logo Design</span>
              <span className="tag">Marketing Strategy</span>
              <span className="tag">Visual Systems</span>
              <span className="tag">Brand Guidelines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
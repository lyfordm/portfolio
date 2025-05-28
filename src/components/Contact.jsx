import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Convert to Google Forms format
    const params = new URLSearchParams();
    params.append('entry.1231003458', formData.get('name')); 
    params.append('entry.858785769', formData.get('email'));
    params.append('entry.1881841595', formData.get('project'));
    params.append('entry.364791721', formData.get('message'));
    
    try {
      await fetch(
        `https://docs.google.com/forms/d/e/1FAIpQLSemUwBHmu4Dq45qn4ZzN56zRTr7qm9we-s3jVnU3OWc54PrPg/formResponse?${params.toString()}`,
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert('There was an error. Please try again or contact me directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="section contact">
        <div className="container">
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="submit-btn"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have a project in mind? Reach out for collaborations or just to say hello.</p>
            <div className="contact-links">
              <a href="mailto:lyfordsmwanza13@gmail.com" className="contact-link">✉ Email</a>
              <a href="tel:+260765632502" className="contact-link">📞 Call</a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="project" 
                placeholder="Project" 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
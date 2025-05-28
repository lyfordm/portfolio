export const scrollToSection = (sectionId) => {
  // If we're not on homepage, navigate there first
  if (window.location.pathname !== '/') {
    window.location.href = `/#${sectionId}`;
    return;
  }

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Update URL without page reload
    window.history.pushState(null, null, `#${sectionId}`);
  }
};
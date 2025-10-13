import { Github, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import './Projects.css';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const projects = [
    {
      id: 1,
      title: 'Smart Attendance System',
      description: 'A QR code-based attendance management system built with Spring Boot. Features include automated QR code generation using ZXing library, real-time attendance tracking, and comprehensive reporting. Streamlines the attendance process for educational institutions.',
      image: project1Image,
      tags: ['Spring Boot', 'JSP', 'MySQL', 'ZXing', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/kommireddya32/Smart-Attendence-Systems',
      demo: 'https://smart-attendence-systems-1.onrender.com'
    },
    {
      id: 2,
      title: 'Santhosh Movies',
      description: 'A Netflix-inspired movie exploring platform built with React. Users can discover movies, search for their favorites, view detailed information including ratings, cast, and synopsis. Features dynamic content loading using TMDB API and a modern, responsive UI. Successfully deployed and live.',
      image: project2Image,
      tags: ['React', 'TMDB API', 'Fetch API', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/kommireddya32/santhosh-movies',
      demo: 'https://santhosh-movies.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div ref={headerRef} className={`section-header scroll-animate ${headerVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work in full-stack development</p>
        </div>
        
        <div ref={gridRef} className={`projects-grid scroll-animate ${gridVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="project-number">0{project.id}</div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a href={project.demo} className="project-link demo" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <button className="view-all-btn">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

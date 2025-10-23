import { Github, ExternalLink, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';
import project4Image from '../assets/project4.png';
import project5Image from '../assets/project5.png';
import './Projects.css';
import { useState } from 'react';

const Projects = () => {
  console.log('Projects component is rendering');
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  
  const featuredProjects = [
    {
      id: 1,
      title: 'The Movie Explorer',
      description: 'A Netflix-inspired movie exploring platform built with React. Users can discover movies, search for their favorites, view detailed information including ratings, cast, and synopsis. Features dynamic content loading using TMDB API and a modern, responsive UI. Successfully deployed and live.',
      image: project2Image,
      tags: ['React', 'TMDB API', 'Fetch API', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/kommireddya32/santhosh-movies',
      demo: 'https://santhosh-movies.netlify.app/'
    },
    {
      id: 2,
      title: 'Smart Attendance System',
      description: 'A QR code-based attendance management system built with Spring Boot. Features include automated QR code generation using ZXing library, real-time attendance tracking, and comprehensive reporting. Streamlines the attendance process for educational institutions.',
      image: project1Image,
      tags: ['Spring Boot', 'JSP', 'MySQL', 'ZXing', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/kommireddya32/Smart-Attendence-Systems',
      demo: 'https://smart-attendence-systems-1.onrender.com'
    }
  ];

  const allProjects = [
    ...featuredProjects,
    {
      id: 3,
      title: 'To Do List',
      description: 'A simple and intuitive task management application built with React. Create, edit, and delete tasks with a clean and responsive interface. Helps you stay organized and manage your daily activities efficiently.',
      image: project3Image,
      tags: ['React', 'Local Storage', 'HTML/CSS', 'JavaScript'],
      demo: 'https://graceful-gumption-b10540.netlify.app/'
    },
    {
      id: 4,
      title: 'Stop Watch',
      description: 'A precise stopwatch application built with React. Features include start, pause, resume, and reset functionality. The clean and minimal design makes it easy to track time with millisecond accuracy.',
image: project4Image,
      tags: ['React', 'JavaScript', 'HTML/CSS'],
      demo: 'https://dynamic-fudge-8ec555.netlify.app/'
    },
    {
      id: 5,
      title: 'Digital Clock',
      description: 'A sleek digital clock application built with React. Displays the current time with a clean, modern interface. Features include 12/24 hour format toggle and a smooth animation for the time display.',
      image: project5Image,
      tags: ['React', 'JavaScript', 'HTML/CSS'],
      demo: 'https://preeminent-tanuki-a8296c.netlify.app/'
    }
  ];

  const toggleAllProjects = () => {
    setShowAllProjects(!showAllProjects);
    if (!showAllProjects) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const renderProjectCard = (project, index) => (
    <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="project-number">0{project.id}</div>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            {project.github && (
              <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                <span>Code</span>
              </a>
            )}
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
  );

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div ref={headerRef} className={`section-header scroll-animate ${headerVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work in full-stack development</p>
        </div>
        
        <div ref={gridRef} className={`projects-grid scroll-animate ${gridVisible ? 'visible' : ''}`}>
          {featuredProjects.map((project, index) => renderProjectCard(project, index))}
        </div>
        
        <div className="view-all-container">
          <button 
            className="view-all-btn" 
            onClick={toggleAllProjects}
            style={{
              padding: '12px 30px',
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--text-white)',
              backgroundColor: 'transparent',
              border: '2px solid var(--accent-cyan)',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: 'rgba(0, 217, 255, 0.1)',
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 20px rgba(0, 217, 255, 0.2)'
              }
            }}
          >
            View All Projects
          </button>
        </div>

        {showAllProjects && (
          <div className="projects-modal" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(10, 14, 39, 0.98)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            overflowY: 'auto'
          }}>
            <div style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '16px',
              maxWidth: '1200px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              border: '2px solid var(--accent-cyan)',
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(0, 217, 255, 0.2)'
              }}>
                <h2 style={{
                  margin: 0,
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: '2rem',
                  fontWeight: 'bold'
                }}>All Projects</h2>
                <button 
                  onClick={toggleAllProjects}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 0, 0, 0.8)',
                    border: '2px solid white',
                    color: 'white',
                    cursor: 'pointer',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0
                  }}
                >
                  <X size={24} />
                </button>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                padding: '1rem 0'
              }}>
                {allProjects.map((project, index) => (
                  <div 
                    key={project.id} 
                    style={{
                      display: 'flex',
                      gap: '2rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      border: '1px solid rgba(0, 217, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      ':hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0, 217, 255, 0.2)'
                      }
                    }}
                  >
                    {/* Project Image */}
                    <div style={{
                      flex: '0 0 40%',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      minHeight: '200px',
                      position: 'relative',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                    }}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    
                    {/* Project Content */}
                    <div style={{
                      flex: '1',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <div>
                        <h3 style={{ 
                          color: 'var(--accent-cyan)',
                          marginTop: 0,
                          marginBottom: '0.75rem',
                          fontSize: '1.5rem'
                        }}>
                          {project.title}
                        </h3>
                        
                        <p style={{ 
                          color: 'var(--text-gray)',
                          marginBottom: '1.25rem',
                          lineHeight: '1.6'
                        }}>
                          {project.description}
                        </p>
                      </div>
                      
                      <div>
                        <div style={{
                          display: 'flex',
                          gap: '1rem',
                          marginBottom: '1.25rem',
                          flexWrap: 'wrap'
                        }}>
                          {project.github && (
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                backgroundColor: 'rgba(0, 217, 255, 0.1)',
                                borderRadius: '50px',
                                color: 'var(--accent-cyan)',
                                textDecoration: 'none',
                                border: '1px solid var(--accent-cyan)',
                                transition: 'all 0.3s ease',
                                fontSize: '0.9rem'
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--accent-cyan)';
                                e.currentTarget.style.color = 'var(--primary-bg)';
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.1)';
                                e.currentTarget.style.color = 'var(--accent-cyan)';
                              }}
                            >
                              <Github size={16} />
                              <span>View Code</span>
                            </a>
                          )}
                          
                          <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              padding: '0.5rem 1rem',
                              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                              borderRadius: '50px',
                              color: 'var(--primary-bg)',
                              textDecoration: 'none',
                              border: 'none',
                              transition: 'all 0.3s ease',
                              fontSize: '0.9rem',
                              fontWeight: '500'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.opacity = '0.9';
                              e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.opacity = '1';
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        </div>
                        
                        {/* Project Tags */}
                        <div style={{ 
                          display: 'flex', 
                          gap: '0.5rem', 
                          flexWrap: 'wrap'
                        }}>
                          {project.tags.map((tag, i) => (
                            <span 
                              key={i} 
                              style={{
                                backgroundColor: 'rgba(0, 217, 255, 0.1)',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                color: 'var(--accent-cyan)',
                                border: '1px solid rgba(0, 217, 255, 0.2)'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        </div>
      </section>
  );
};

export default Projects;

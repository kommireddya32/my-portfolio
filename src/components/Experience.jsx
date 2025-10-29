import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Experience.css';

const Experience = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [timelineRef, timelineVisible] = useScrollAnimation();
  const [visualRef, visualVisible] = useScrollAnimation();
  const experiences = [
    {
      role: 'Full Stack Web Development Trainee',
      company: 'TAP Academy',
      period: 'January 2025 - May 2025',
      location: 'Bangalore, India',
      description: 'Completed intensive Full Stack Web Development training program with hands-on internship experience. Built multiple real-world projects using Java, Spring Boot, and React. Gained expertise in developing RESTful APIs, database management, and modern web application architecture.',
      skills: ['Java', 'Spring Boot', 'React', 'MySQL', 'Oracle DB', 'Hibernate', 'REST APIs', 'HTML/CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
    }
  ];

  const technologies = [
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Oracle DB', icon: '💾' },
    { name: 'Hibernate', icon: '🔄' },
    { name: 'REST API', icon: '🔌' }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div ref={headerRef} className={`section-header scroll-animate ${headerVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Training & Experience</h2>
          <p className="section-subtitle">My learning journey and technical training</p>
        </div>
        
        <div className="experience-content">
          <div ref={timelineRef} className={`experience-timeline scroll-animate-left ${timelineVisible ? 'visible' : ''}`}>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-marker"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <div className="experience-company">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="experience-badge">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="experience-location">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="experience-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div ref={visualRef} className={`experience-visual scroll-animate-right ${visualVisible ? 'visible' : ''}`}>
            <div className="tech-showcase">
              <h3 className="tech-title">Technologies I Work With</h3>
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="tech-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="tech-icon">{tech.icon}</span>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-value">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

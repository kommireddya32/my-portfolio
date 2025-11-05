import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const skills = [
    {
      name: 'Java',
      category: 'Backend',
      color: '#ff6b6b',
      icon: '☕'
    },
    {
      name: 'Spring Boot',
      category: 'Framework',
      color: '#51cf66',
      icon: '🍃'
    },
    {
      name: 'Hibernate',
      category: 'ORM',
      color: '#4dabf7',
      icon: '🔄'
    },
    {
      name: 'React',
      category: 'Frontend',
      color: '#339af0',
      icon: '⚛️'
    },
    {
      name: 'JavaScript',
      category: 'Language',
      color: '#ffd43b',
      icon: '📜'
    },
    {
      name: 'HTML5',
      category: 'Frontend',
      color: '#ff6b6b',
      icon: '🌐'
    },
    {
      name: 'CSS3',
      category: 'Styling',
      color: '#4dabf7',
      icon: '🎨'
    },
    {
      name: 'MySQL',
      category: 'Database',
      color: '#ff8787',
      icon: '🗄️'
    },
    {
      name: 'Oracle',
      category: 'Database',
      color: '#ff6b6b',
      icon: '💾'
    },
    {
      name: 'VS Code',
      category: 'Tools',
      color: '#9775fa',
      icon: '💻'
    },
    {
      name: 'Postman',
      category: 'Tools',
      color: '#FF6C37',
      icon: '📡'
    },
    {
      name: 'Swagger',
      category: 'Tools',
      color: '#85EA2D',
      icon: '📚'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div ref={headerRef} className={`section-header scroll-animate ${headerVisible ? 'visible' : ''}`}>
          <h2 className="section-title">The Skills That I Have</h2>
          <p className="section-subtitle">💼 Technologies & Tools I Work With</p>
        </div>
        
        <div ref={gridRef} className={`skills-grid scroll-animate-scale ${gridVisible ? 'visible' : ''}`}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderColor: skill.color
              }}
            >
              <div className="skill-icon" style={{ background: `${skill.color}20` }}>
                <span style={{ fontSize: '2.5rem' }}>{skill.icon}</span>
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-category">{skill.category}</p>
              </div>
              <div className="skill-glow" style={{ background: skill.color }}></div>
            </div>
          ))}
        </div>
        
        <div className="skills-footer">
          <p className="skills-note">
            Always learning and expanding my tech stack to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
